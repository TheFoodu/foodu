import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Footer from "../Components/Footer"

export default class ScheduleDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          hasRequestedBooking: false
      };
    }
  
    _onRequestPress = (detailUUID) => {
        this.props.navigate("BookingDetail", { detailId: detailUUID })
    }

    _onSearchPress = (date) => {
        this.props.navigate("Map", { searchDate: date })
    }

    _getDetailSection = () => {
        return this.state.hasRequestedBooking ? this._getRequestedBooking() : this._getSearchSection();
    };

    _getRequestedBooking = () => {
        return (
            <View>
                <Text style={ styles.dateText }>Sunday 12 2018</Text>
                <View style={ [styles.containerBox, { backgroundColor: "#FFFBB5" }] }>
                    <Text style={ [styles.detailText, { fontWeight: 'bold' }] }>Venue Name</Text>
                    <Text style={ styles.detailText }>Venue Address</Text>
                    <Text style={ styles.detailText }>Booking Time Range</Text>
                </View>            
            </View>
        );
    }

    _getSearchSection = () => {
        return (
            <View style={ [styles.containerBox, { justifyContent: "center", alignItems: "center" }] }>
                <Text style={ styles.detailText }>Select Venue</Text>
            </View>
        );
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.setState({ hasRequestedBooking: !this.state.hasRequestedBooking})}>
                <View style={ styles.container }>
                    { this._getDetailSection() }
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "stretch",
        margin: 5,
        padding: 5,
        borderTopWidth: 0.7,
        borderTopColor: "#f8f8f8",
        borderBottomWidth: 0.7,
        borderBottomColor: "#666666"
    },
    containerBox: {
        borderRadius: 4,
        borderWidth: 0.7,
        borderColor: '#666',
        padding: 20
    },
    dateText: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20
    },
    detailText: {
        fontSize: 18
    }
});