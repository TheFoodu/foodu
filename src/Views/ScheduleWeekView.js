import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Footer from "../Components/Footer";
import ScheduleDetail from "../Components/ScheduleDetail";

export default class ScheduleWeekView extends React.Component {
  static navigationOptions = {
    title: 'Weekly Schedule',
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <ScheduleDetail />
        <Footer navigate={navigate}/>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  headerText: {
    fontSize: 20
  }
});

