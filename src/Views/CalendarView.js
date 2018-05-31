import React from "react";
import moment from "moment";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import BaseView from "./BaseView";
import { Calendar } from 'react-native-calendars';
import { SALMON } from "../constants";
const { width } = Dimensions.get('window');

export default class CalendarView extends BaseView {
    constructor(props){
        super(props)
        this.state = { markedDates: { "2018-05-16": { selected: true, marked: true, selectedColor: SALMON } } };
    }

    markDate = (day) => {
        const selectedDay = moment(day.dateString).format("YYYY-MM-DD");
        let selected = true;
        if (this.state.markedDates[selectedDay]) {
            // Already in marked dates, so reverse current marked state
            selected = !this.state.markedDates[selectedDay].selected;
        }

        // Create a new object using object property spread since it should be immutable
        // Reading: https://davidwalsh.name/merge-objects
        const updatedMarkedDates = { ...this.state.markedDates, ...{ [selectedDay]: { selected, selectedColor: SALMON } } };

        // Triggers component to render again, picking up the new state
        this.setState({ markedDates: updatedMarkedDates });
    };
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Calendar 
                    markedDates={this.state.markedDates}
                    theme={{
                        textDayFontFamily: 'montserrat',
                        textMonthFontFamily: 'montserrat',
                        textDayHeaderFontFamily: 'montserrat',
                    }}
                    onDayPress={this.markDate}
                ></Calendar>
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