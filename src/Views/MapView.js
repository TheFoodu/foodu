import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import BaseView from "./BaseView";
import { MapView as ExpoMapView, Marker } from "expo";
import MapViewCallout from "../Components/MapViewCallout";
import { LINK_COLOR } from "../constants";

export default class MapView extends BaseView {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.requestBooking = this.requestBooking.bind(this);

    this.state = {
      markers: [],
      selectedMarker: null
    };
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  componentDidMount() {
    const { navigate } = this.props.navigation;
    fetch("https://data.colorado.gov/resource/ic4i-9zku.json")
    .then(response => response.json())
    .then(tastingRoomDataset => {
        return tastingRoomDataset.filter(x => x.location != undefined).map(x => {
          return {
            "venueName": x.doing_business_as,
            "street": x.location_address,
            "city": x.location_city,
            "state": x.location_state,
            "zip": x.location_zip.substr(0, 5),
            "latitude": x.location.coordinates[1],
            "longitude": x.location.coordinates[0]
          }
      })
    })
    .then(myMarkers => this.setState({ markers: myMarkers }))
    .catch(error =>  Alert.alert(
      "An Error Has Occured", 
      error.message,
      [
        {text: 'OK', onPress: () => navigate("ScheduleWeek")},
        {text: 'Retry', onPress: () => this.forceUpdateHandler()}
      ],
      { cancelable: false }
    ))
  }

  requestBooking = () => {
    const { navigate } = this.props.navigation;
    debugger;
    fetch("https://foodu-api.herokuapp.com/api/v1/upsert_schedule", {
      method: 'POST',
      body: JSON.stringify({
        "authId" : this.firebase.auth().current.uid,
        "date": this.props.searchDate,
        ...this.state.selectedMarker
      }),
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => navigate("ScheduleWeek"));
  };
  
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={{ flex: 1 }}>
        <ExpoMapView
          style={styles.container}
          initialRegion={{
            latitude: 39.7392,
            longitude: -104.9903,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
          }}
          
        >
          {this.state.markers.map((marker, index) => (
            <ExpoMapView.Marker
              key={index}
              coordinate={{
                latitude: marker.latitude, 
                longitude: marker.longitude
              }}
              onPress={() => this.setState({ selectedMarker: marker })}
            />
          ))}
        </ExpoMapView>
        {this.state.selectedMarker && (
          <MapViewCallout
            marker={this.state.selectedMarker}
            requestBooking={this.requestBooking}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  containerText: {
    fontSize: 24
  },
  callout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  }
});
