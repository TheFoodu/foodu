import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MapViewCallout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>{props.marker.title}</Text>
        <Text>{props.marker.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button color="white" title="Request" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 90,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%"
  },
  buttonContainer: {
    backgroundColor: "#E06C63",
    width: "30%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MapViewCallout;
