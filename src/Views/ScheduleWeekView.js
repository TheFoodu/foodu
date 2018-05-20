import React from "react";
import moment from "moment";
import Footer from "../Components/Footer";
import ScheduleWeek from "../Components/ScheduleWeek";
import ScheduleDetail from "../Components/ScheduleDetail"
import { Button, Image, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";
const { width } = Dimensions.get('window');

export default class ScheduleWeekView extends React.Component {
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
    title: 'Weekly Schedule',
  };

  onSwipeLeft(gestureState) {
    //todo
  }
  
  onSwipeRight(gestureState) {
    //todo
  }
  
  onSwipe(gestureName, gestureState) {
    this.setState({gestureName: gestureName, weekText: gestureName + " at " + moment().format('h:mm:ss a')});
  }

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
      {UUID: 1, date: new Date(), name: "Venue 1", address: "Venue Address", timeRange: '1:00 PM - 4:00 PM'},
      {UUID: 2, date: new Date().AddDays(1), name: "Venue 2", address: "Venue Address", timeRange: '7:00 PM - 9:00 PM'},
      {UUID: 3, date: new Date().AddDays(3), name: "Venue 3", address: "Venue Address", timeRange: '2:00 PM - 7:00 PM'},
      {UUID: 4, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 5, date: new Date().AddDays(7), name: "Venue 5", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 6, date: new Date().AddDays(12), name: "Venue 6", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      // Skip a week
      {UUID: 7, date: new Date().AddDays(28), name: "Venue 6", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'}
    ]

    let weeks = this.sortIntoWeeks(serverData)

    this.setState({ bookingByWeeks: weeks })
  }

  render() {;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView
        onLayout={(event) => {
            // Handle rotation
            let {x, y, width, height} = event.nativeEvent.layout;
            this.setState({deviceWidth: width})
        }}
        pagingEnabled={true}
        horizontal={true}>
        {this.state.bookingByWeeks.map(week => {
          let range = this.rangeTextFormatter(week)
          return (
            <ScheduleWeek 
              key={range}
              weekText={range}
              deviceWidth={this.state.deviceWidth}>
              {week.bookings.map(booking => <ScheduleDetail key={booking.UUID} {...booking} navigate={navigate} />)}
            </ScheduleWeek>)
        })} 
      </ScrollView>
    );
    
  }
}

Date.prototype.AddDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

