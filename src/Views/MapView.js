import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LINK_COLOR } from "../constants";

export default class LoginView extends React.Component {
  static navigationOptions = {
    title: "Request Booking",
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.containerText}>Map Placeholder</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
      fontSize: 24
  }
});
