import React from "react";
import moment from "moment";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import { Calendar } from 'react-native-calendars';
const { width } = Dimensions.get('window');

export default class CalendarView extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            markedDates: []
        }
    }
    static navigationOptions = {
        title: "Calendar",
    };
    markDate(day) {
        this.state.markedDates.push(day.dateString) 
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
                    }}
                    onDayPress={(day) => { this.markDate(day)
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