import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default class LoginView extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Login View</Text>
        <Button
          title="Go to HomeView"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go to ScheduleView"
          onPress={() => this.props.navigation.navigate("ScheduleWeek")}
        />
        <Button
          title="Go to WalkthroughView"
          onPress={() => this.props.navigation.navigate("Walkthrough")}
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
