import { StackNavigator } from "react-navigation";

export const App = StackNavigator({
  Home: { screen: HomeView },
  Login: { screen: LoginView }
});
