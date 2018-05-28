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
                <Calendar 
                    theme={{
                        textDayFontFamily: 'montserrat',
                        textMonthFontFamily: 'montserrat',
                        textDayHeaderFontFamily: 'montserrat',
                    }}></Calendar>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#ffffff'
    },
});