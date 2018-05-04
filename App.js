import React from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation"; // Version can be specified in package.json
import HomeView from "./src/Views/HomeView";
import LoginView from "./src/Views/LoginView";
import ScheduleWeekView from "./src/Views/ScheduleWeekView";
import WalkthroughView from "./src/Views/WalkthroughView";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeView
    },
    Login: {
      screen: LoginView
    },
    ScheduleWeek: {
      screen: ScheduleWeekView
    },
    Walkthrough: {
      screen: WalkthroughView
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
