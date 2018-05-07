import React from "react";
import { Image, StyleSheet, Text, View, Linking } from "react-native";
import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";
import { LINK_COLOR } from "../constants";

export default class LoginView extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={require("../Images/foodu_logo.png")} />
        </View>
        <LoginForm />
        <Text style={styles.emailInfoContainer}>
          <Text style={styles.emailInfo}>Contact</Text>
          <Text style={[styles.emailInfo, { color: LINK_COLOR }]} 
              onPress={() => Linking.openURL("mailto:thefoodu@gmail.com?subject=Request to Join Foodu!")}>
            &nbsp;thefoodu@gmail.com&nbsp;
          </Text>
          <Text style={styles.emailInfo}>to register!</Text>
        </Text>
        <Footer navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10
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
