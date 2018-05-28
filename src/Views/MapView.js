import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView, Marker } from "expo";
import { LINK_COLOR } from "../constants";

export default class LoginView extends React.Component {
  constructor() {
    super();

    this.state = {
      markers: [
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
      ]
    };
  }

  static navigationOptions = {
    title: "Request Booking"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 39.7392,
          longitude: -104.9903,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
      >
        {this.state.markers.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            image={require("../Images/pin-sNormal_1.png")}
          />
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  containerText: {
    fontSize: 24
  }
});
