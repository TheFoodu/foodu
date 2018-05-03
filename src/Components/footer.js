import React from "react";
import { StyleSheet, View, Button } from "react-native";

const Footer = (props) => (
    <View style={ styles.buttonGroup }>
        <Button
        title="Login"
        onPress={() => props.navigate("Login")}
        />
        <Button
        title="Schedule"
        onPress={() => props.navigate("ScheduleWeek")}
        />
        <Button
        title="Walkthrough"
        onPress={() => props.navigate("Walkthrough")}
        />
    </View>
);

const styles = StyleSheet.create({
    buttonGroup: {
      flex:3,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  });
export default Footer;