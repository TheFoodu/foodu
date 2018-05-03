import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default class HomeView extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={{ height: 50, width: 103 }}
          source={require("../assets/foodu_logo.png")}
        />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          title="Go to LoginView"
          onPress={() => this.props.navigation.navigate("Login")}
        />
        Login View
        <Button
          title="Go to ScheduleWeekView"
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
