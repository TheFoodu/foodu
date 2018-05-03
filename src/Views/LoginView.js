import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Footer from "../Components/footer";

export default class LoginView extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image
          style={{ height: 50, width: 103 }}
          source={require("../public/foodu_logo.png")}
        />
        <Text>Login View</Text>
        <Footer navigate={navigate}/>
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
