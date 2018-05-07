import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class LoginForm extends React.Component {
    render() {
        return (
         <View style={styles.container}>
            <TextInput placeholder="Email"
                       placeholderTextColor="rgba(244, 244, 244, 0.7)"
                       style={styles.input} />
            <TextInput placeholder="Password" 
                       placeholderTextColor="rgba(244, 244, 244, 0.7)"
                       style={styles.input} />
         </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 20
    },
    input: {
      height: 40,
      marginBottom: 20,
      padding: 10,
      width: 220,
      backgroundColor: "#1e3f72",
      color: "#FFF"
    }
});