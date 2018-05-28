import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MapViewCallout = props => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    position: "absolute",
    bottom: 10,
    right: 10
  }
});

export default MapViewCallout;
