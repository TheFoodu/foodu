import React from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";

export default class LoginForm extends React.Component {
    _submitLogin = () => {
        this.props.navigate("ScheduleWeek");
    }

    render() {
        return (
         <View style={styles.container}>
            <TextInput placeholder="Email"
                       placeholderTextColor="#f8f8f8"
                       style={styles.input} />
            <TextInput onSubmitEditing={this._submitLogin}
                       placeholder="Password" 
                       placeholderTextColor="#f8f8f8"
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