import React from "react";
import { Image, StyleSheet, Text, View, Linking } from "react-native";
import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";
import { LINK_COLOR } from "../constants";

export default class LoginView extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={ styles.backgroundImage } source={require("../Images/login-background.png")}></Image>
        <View>
          <Image style={styles.logo} source={require("../Images/foodu-logoNormal.png")} />
        </View>
        <LoginForm navigate={navigate}/>
        <Text style={styles.emailInfoContainer}>
          <Text style={styles.emailInfo}>Contact</Text>
          <Text style={[styles.emailInfo, { color: LINK_COLOR }]} 
              onPress={() => Linking.openURL("mailto:thefoodu@gmail.com?subject=Request to Join Foodu!")}>
            &nbsp;thefoodu@gmail.com&nbsp;
          </Text>
          <Text style={styles.emailInfo}>to register!</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  logo: {
    height: 110,
    width: 228
  },
  emailInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16
  },
});
