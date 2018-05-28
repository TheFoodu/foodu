import React from "react";
import moment from "moment";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const { width } = Dimensions.get('window');

export default class CalendarView extends React.Component {
    static navigationOptions = {
        title: "Calendar",
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.containerText}> Calendar</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerText: {
        fontSize: 24
    }
});