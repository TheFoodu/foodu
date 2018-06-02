import React from "react";
import {
  Button,
  StyleSheet,
  View,
  TextInput,
  Alert,
  TouchableHighlight,
  Text
} from "react-native";
import { SALMON } from "../constants";

import firebase from "../../firebase";

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  _submitLogin = () => {
    let email = this.state.email
    let password = this.state.password
    if (email === "" && password === "") {
      this.props.navigate("ScheduleWeek");
      return;
    }
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        Alert.alert(error.message);
        this.setState({ email: "", password: "" });
      })
      .then(response => this.props.navigate("ScheduleWeek"));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          autoCorrect={false}
          placeholderTextColor="#f8f8f8"
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          secureTextEntry={true}
          onSubmitEditing={() => this._submitLogin(this.state.email, this.state.password)}
          autoCorrect={false}
          placeholder="Password"
          placeholderTextColor="#f8f8f8"
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <TouchableHighlight
          style={styles.signInContainer}
          onPress={() => this._submitLogin(this.state.email, this.state.password)}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  signInContainer: {
    backgroundColor: SALMON,
    borderRadius: 20,
    height: 40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  signInText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    lineHeight: 40
  },
  input: {
    height: 40,
    marginBottom: 20,
    padding: 10,
    width: 220,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 20,
    color: "#FFF"
  }
});
