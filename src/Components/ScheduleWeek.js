import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures"
import ScheduleDetail from "../Components/ScheduleDetail"

export default class ScheduleWeek extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        myText: 'I\'m ready to get swiped!',
        gestureName: 'none',
        backgroundColor: '#fff'
      };
    }

    onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
    }
    
    onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
    }
    
    onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
    }
    
    onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
    }
    
    onSwipe(gestureName, gestureState) {
        this.setState({gestureName: gestureName});
    }
    
    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeUp={(state) => this.onSwipeUp(state)}
                onSwipeDown={(state) => this.onSwipeDown(state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={styles.container}
            >
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>This is a Date</Text>
                </View>
                <ScrollView>
                    <ScheduleDetail />
                    <ScheduleDetail />
                    <ScheduleDetail />
                    <ScheduleDetail />
                    <ScheduleDetail />
                    <ScheduleDetail />
                    <ScheduleDetail />
                    <ScheduleDetail />
                </ScrollView>
            </GestureRecognizer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch"
    },
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    dateText: {
        fontSize: 18,
    },
    text: {
        fontSize: 24
    }
});