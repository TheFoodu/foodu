import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default class ScheduleWeekView extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>ScheduleWeekView</Text>
        <Button
          title="Go to HomeView"
          onPress={() => this.props.navigation.navigate("HomeView")}
        />
        <Button
          title="Go to LoginView"
          onPress={() => this.props.navigation.navigate("LoginView")}
        />
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
