import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView, Marker } from "expo";
import MapViewCallout from "../Components/MapViewCallout";
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
      ],
      selectedMarker: null
    };
  }

  static navigationOptions = {
    title: "Request Booking"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.container}
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
              image={require("../Images/pin-sNormal_1.png")}
              onPress={() => this.setState({ selectedMarker: marker })}
            />
          ))}
        </MapView>
        {this.state.selectedMarker && (
          <MapViewCallout marker={this.state.selectedMarker} />
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
