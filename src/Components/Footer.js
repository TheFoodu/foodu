import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

const _touchableNav = (props, path, flexPriority = 1) => {
    return (
        <TouchableHighlight style={[styles.fullWidthButton, { flex: flexPriority }]} onPress={() => props.navigate(path)}>
            <Text style={styles.fullWidthButtonText}>{path}</Text>
        </TouchableHighlight>
    );
}

const Footer = (props) => (
    <View style={ styles.inputsContainer }>
        {/* {_touchableNav(props, "Login")}
        {_touchableNav(props, "ScheduleWeek", 2)}
        {_touchableNav(props, "Walkthough", 2)} */}
    </View>
);

const styles = StyleSheet.create({
    inputsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 10
      },
      fullWidthButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#659dbd',
        borderRightColor: "#f8f8f8",
        borderRightWidth: 0.3,
        borderLeftColor: "#f8f8f8",
        borderLeftWidth: 0.3
      },
      fullWidthButtonText: {
        fontSize: 18,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
        color: 'white'
      }
  });

export default Footer;