import React from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation"; // Version can be specified in package.json
import LoginView from "./src/Views/LoginView";
import ScheduleWeekView from "./src/Views/ScheduleWeekView";
import WalkthroughView from "./src/Views/WalkthroughView";
import CalendarView from "./src/Views/CalendarView";
import MapView from "./src/Views/MapView";

const RootStack = StackNavigator(
  {
    Login: { screen: LoginView },
    ScheduleWeek: { screen: ScheduleWeekView },
    Walkthrough: { screen: WalkthroughView },
    Calendar: { screen: CalendarView },
    Map: { screen: MapView }
  },
  {
    initialRouteName: "Login"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack style={{ flex: 1 }}/>;
  }
}
