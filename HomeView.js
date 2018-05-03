import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
    render() {
          return (
                <View style={styles.container}>
                  <Image
                    style={{ height: 50, width: 103 }}
                    source={require("./assets/foodu_logo.png")}
                  />
                  <Text>Open up App.js to start working on your app!</Text>
                  <Text>Changes you make will automatically reload.</Text>
                  <Text>Shake your phone to open the developer menu.</Text>
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
