import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView as ExpoMapView, Marker } from "expo";
import MapViewCallout from "../Components/MapViewCallout";
import { LINK_COLOR } from "../constants";

export default class MapView extends React.Component {
  constructor() {
    super();

    this.state = {
      markers: [],
      selectedMarker: null
    };
  }

  static navigationOptions = {
    title: "Request Booking"
  };

  componentDidMount() {
    const serverMarkers = [
      {
        latlng: {
          latitude: 39.7487,
          longitude: -105.0077
        },
        title: "Joe's Pizza Shoppe",
        description: "Yummmy Pizza"
      },
      {
        latlng: {
          latitude: 39.7537,
          longitude: -105.0007
        },
        title: "Taco Shack",
        description: "Spicy Tacos"
      }
    ];
    this.setState({ markers: serverMarkers });
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
              coordinate={marker.latlng}
              image={require("../Images/pin-sNormal_1.png")}
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
