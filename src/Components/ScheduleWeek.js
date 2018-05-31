import React from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions} from "react-native";
import { SALMON } from '../constants';
const { width } = Dimensions.get('window');

export default class ScheduleWeek extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    
    render() {
        const childrenCount = this.props.children.childrenCount
        return (
            <View style={[styles.container, { width: this.props.deviceWidth }]}>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{this.props.weekText}</Text>
                </View>
                <ScrollView style={styles.daysContainer}>
                    {
                        React.Children.map(this.props.children, (c,i) => {
                            if(i === 0) {
                                return React.cloneElement(c, {...c.props, ...{location: 'first'}})
                            } else if(i === childrenCount) {
                                return React.cloneElement(c, {...c.props, ...{location: 'last'}})
                            }
                            return c;
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: SALMON
    },
    dateText: {
        color: '#f8f8f8',
        fontSize: 18,
    },
    daysContainer: {
        flex: 1,
        paddingBottom: 10
    }
});