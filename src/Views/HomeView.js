import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Footer from "../Components/footer";

export default class HomeView extends React.Component {
  navigationOptions = {
    headerTitle: (
        <Image source={require('../../public/foodu_logo.png')}/>
    ),
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={{ height: 50, width: 103 }}
          source={require("/public/foodu_logo.png")}
        />

        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Footer navigate={navigate}/>
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
  buttonGroup: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
