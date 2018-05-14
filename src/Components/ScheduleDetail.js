import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Footer from "../Components/Footer";
import moment from "moment";

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
        const {name, address, timeRange} = this.props;
        return (
            <View style={ [styles.containerBox, { backgroundColor: "#FFFBB5" }] }>
                <Text style={ [styles.detailText, { fontWeight: 'bold' }] }>{name}</Text>
                <Text style={ styles.detailText }>{address}</Text>
                <Text style={ styles.detailText }>{timeRange}</Text>
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
        const firstOrLastStyling = (this.props.location === "first") ? styles.first : (this.props.location === "last") ? styles.last : {};
        return (
            <TouchableOpacity onPress={() => this.setState({ hasRequestedBooking: !this.state.hasRequestedBooking})}>
                <View style={ [styles.container, firstOrLastStyling] }>
                    <Text style={ styles.dateText }>{moment(this.props.date).format('ddd D YYYY')}</Text>
                    { this._getDetailSection() }
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "stretch",
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
    },
    first: {
        borderTopWidth: 0,
        paddingTop: 2
    },
    last: {
        borderBottomWidth: 0
    }
});