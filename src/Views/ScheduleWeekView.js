import React from "react";
import moment from "moment";
import { StyleSheet, Text, ScrollView, Dimensions, View, Image, TouchableHighlight } from "react-native";
import BaseView from "./BaseView"; 
import ScheduleWeek from "../Components/ScheduleWeek";
import ScheduleDetail from "../Components/ScheduleDetail";
import { SALMON, BROWN } from "../constants";
const { width, height } = Dimensions.get('window');

export default class ScheduleWeekView extends BaseView {
  constructor(props) {
    super(props);
    this.today = moment().day()
    this.thisMonth = moment().format('MMMM')
    this.firstOfWeek = moment().startOf('week').format("Do")
    this.lastOfWeek = moment().endOf('week').format("Do")
    this.state = {
      bookingByWeeks: [{
        month: "January",
        startDate: new Date(),
        endDate: new Date(),
        bookings: []
      }],
      gestureName: "",
      startingPoint: moment(),
      weekText: this.thisMonth + " " + this.firstOfWeek + " - " + this.lastOfWeek,
      deviceWidth: width
    };
  }

  static navigationOptions = {
      headerTitle: (
          <Image style={
              { 
                  flex: 1,
                  alignSelf: 'center',
                  resizeMode: 'contain'
              }} 
              source={require('../Images/header-logo.png')}
          />
      ),
      headerStyle: {
        height: 60,
        backgroundColor: '#411121'
      },
      headerTintColor: '#ffffff',
      headerLeft: (
          <View />
      ),
      headerRight: (
          <View />
      )
  };

  sortIntoWeeks(bookings){
    let weeks = [],
        week = {
          month: "January",
          startDate: new Date(),
          endDate: new Date(),
          bookings: []
        },
        amountOfBookings = bookings.length

    bookings.forEach((booking, i) => {
      let date = moment(booking.date),
          lastOfWeek = date.endOf('week').toDate(),
          startedNewWeek = lastOfWeek.getTime() !== week.endDate.getTime(),
          hadBookingsFromLastWeek = week.bookings.length > 0,
          isLastBooking = i+1 === amountOfBookings

      if(startedNewWeek){
        if(hadBookingsFromLastWeek){
          // Store Week
          weeks.push(week)
          // Reset Week
          week = {
            month: "January",
            startDate: new Date(),
            endDate: new Date(),
            bookings: []
          }
        }
        // Add new booking
        week.month = date.format('MMMM')
        week.startDate = date.startOf('week').toDate()
        week.endDate = date.endOf('week').toDate()
      }
      // Store booking info for week
      week.bookings.push(booking)

      if(isLastBooking && hadBookingsFromLastWeek){
        weeks.push(week)
      }
    })

    return weeks
  }

  rangeTextFormatter(week) {
    let startDate = moment(week.startDate).format("MMMM Do")
    let endDate = moment(week.endDate).format("MMMM Do")
    return `${startDate} - ${endDate}`
  }

  componentDidMount() {
    // do fetch call here to get real data

    let serverData = [
      {UUID: 1, date: new Date(), name: "Venue 1", address: "Venue Address", timeRange: '1:00 PM - 4:00 PM', hasRequestedBooking: true},
      {UUID: 2, date: new Date().AddDays(1), name: "Venue 2", address: "Venue Address", timeRange: '7:00 PM - 9:00 PM', hasRequestedBooking: false},
      {UUID: 3, date: new Date().AddDays(3), name: "Venue 3", address: "Venue Address", timeRange: '2:00 PM - 7:00 PM', hasRequestedBooking: true},
      {UUID: 4, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM', hasRequestedBooking: true},
      {UUID: 5, date: new Date().AddDays(7), name: "Venue 5", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM', hasRequestedBooking: false},
      {UUID: 6, date: new Date().AddDays(12), name: "Venue 6", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM', hasRequestedBooking: true},
      // Skip a week
      {UUID: 7, date: new Date().AddDays(28), name: "Venue 6", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM', hasRequestedBooking: true}
    ]

    let weeks = this.sortIntoWeeks(serverData)

    this.setState({ bookingByWeeks: weeks })
  }

  render() {;
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollview} 
          onLayout={event => {
            // Handle rotation
            let { x, y, width, height } = event.nativeEvent.layout;
            this.setState({ deviceWidth: width });
          }} pagingEnabled={true} horizontal={true}>
          {this.state.bookingByWeeks.map(week => {
            let range = this.rangeTextFormatter(week);
            return (
              <ScheduleWeek key={range} weekText={range} deviceWidth={this.state.deviceWidth}>
                {week.bookings.map(booking => (
                  <ScheduleDetail
                    key={booking.UUID}
                    {...booking}
                    navigate={navigate}
                  />
                ))}
              </ScheduleWeek>
            )
          })}
        </ScrollView>
        <TouchableHighlight style={ styles.plusButton } onPress={() => navigate("Calendar")}>
          <Image source={require('../Images/plus.png')} />
        </TouchableHighlight>
        <View style={ styles.bottomBar }></View>
      </View>
    )
  }
}

Date.prototype.AddDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height: height
  },
  plusButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: SALMON,
    width: 75,
    height: 75,
    borderRadius: 75/2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  scrollview: {
    backgroundColor: '#ffffff'
  },
  bottomBar: {
    height: 58, 
    backgroundColor: BROWN
  }
});
