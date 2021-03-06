import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import BaseView from "./BaseView";
import Footer from "../Components/Footer";

export default class WalkthroughView extends BaseView {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>ScheduleWeekView</Text>
        <Footer navigate={navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 20
  }
});
