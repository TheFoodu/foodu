import React from "react";
import { Button, StyleSheet, View, TextInput, Alert } from "react-native";

import firebase from "../../firebase";

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  _submitLogin = (email, password) => {
    if (email === "" && password === "") {
      this.props.navigate("ScheduleWeek");
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => this.props.navigate("ScheduleWeek"))
      .catch(error => {
        Alert.alert(error.message);
        this.setState({ email: "", password: "" });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#f8f8f8"
          style={styles.input}
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          onSubmitEditing={this._submitLogin}
          placeholder="Password"
          placeholderTextColor="#f8f8f8"
          style={styles.input}
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          title="Login"
          onPress={() =>
            this._submitLogin(this.state.email, this.state.password)
          }
        />
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
