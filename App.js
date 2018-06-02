import React from "react";
import { Font } from "expo";
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
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      montserrat: require("./src/Fonts/Montserrat-Regular.ttf"),
      "montserrat-bold": require("./src/Fonts/Montserrat-Bold.ttf"),
      "montserrat-semi-bold": require("./src/Fonts/Montserrat-SemiBold.ttf"),
      roboto: require("./src/Fonts/Roboto-Regular.ttf"),
      "roboto-medium": require("./src/Fonts/Roboto-Medium.ttf"),
      "roboto-bold": require("./src/Fonts/Roboto-Bold.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  renderRootStack = () =>
    this.state.fontLoaded ? <RootStack style={{ flex: 1 }} /> : null;

  render() {
    return this.renderRootStack();
  }
}
