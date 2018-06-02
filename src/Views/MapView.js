import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import BaseView from "./BaseView";
import { MapView as ExpoMapView, Marker } from "expo";
import MapViewCallout from "../Components/MapViewCallout";
import { LINK_COLOR } from "../constants";

export default class MapView extends BaseView {
  constructor() {
    super();

    this.state = {
      markers: [],
      selectedMarker: null
    };
  }

  componentDidMount() {
    fetch('https://data.colorado.gov/resource/ic4i-9zku.json')
    .then(response => response.json())
    .then(myJson => {
        return myJson.filter(x => x.location != undefined).map(x => {
          return {
            "latitude": x.location.coordinates[1],
            "longitude": x.location.coordinates[0],
            "title": x.doing_business_as,
            "address": x.location_address,
            "city": x.location_city,
            "state": x.location_state,
            "zip": x.location_zip.substr(0, 5)
          }

      })
    })
    .then(myMarkers => this.setState({ markers: myMarkers }))
    .catch(error =>  Alert.alert(
      "An Error Has Occured", 
      error.message,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    ))
  }

  requestBooking = () => {
    // post booking uuid with venue id
    this.props.navigation.navigate("ScheduleWeek");
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
