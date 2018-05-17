import React from "react";
import moment from "moment";
import Footer from "../Components/Footer";
import ScheduleWeek from "../Components/ScheduleWeek";
import ScheduleDetail from "../Components/ScheduleDetail"
import { Button, Image, StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
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
      weekText: this.thisMonth + " " + this.firstOfWeek + " - " + this.lastOfWeek
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

  componentDidMount() {
    // do fetch call here to get real data

    let callToServer = [
      {UUID: 1, date: new Date(), name: "Venue 1", address: "Venue Address", timeRange: '1:00 PM - 4:00 PM'},
      {UUID: 2, date: new Date().AddDays(1), name: "Venue 2", address: "Venue Address", timeRange: '7:00 PM - 9:00 PM'},
      {UUID: 3, date: new Date().AddDays(3), name: "Venue 3", address: "Venue Address", timeRange: '2:00 PM - 7:00 PM'},
      {UUID: 4, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 5, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 6, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 7, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 8, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 9, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 10, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 11, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 12, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 13, date: new Date().AddDays(5), name: "Venue 4", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 14, date: new Date().AddDays(7), name: "Venue 5", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'},
      {UUID: 15, date: new Date().AddDays(12), name: "Venue 6", address: "Venue Address", timeRange: '12:00 PM - 8:00 PM'}
    ]

    let weeks = [];
    let week = {
      month: "January",
      startDate: new Date(),
      endDate: new Date(),
      bookings: []
    }

    callToServer.forEach((booking, i) => {
      let date = moment(booking.date)
      
      let lastOfWeek = date.endOf('week').toDate()

      if(lastOfWeek.getTime() !== week.endDate.getTime()){
        if(week.bookings.length > 0){
          weeks.push(week)
          week = {
            month: "January",
            startDate: new Date(),
            endDate: new Date(),
            bookings: []
          }
        }
        week.month = date.format('MMMM')
        week.startDate = date.startOf('week').toDate()
        week.endDate = date.endOf('week').toDate()
      }

      week.bookings.push(booking)

      if(i+1 === callToServer.length){
        if(week.bookings.length > 0){
          weeks.push(week)
        }
      }
    })

    this.setState({
      bookingByWeeks: weeks
    })
  }

  render() {;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView 
        horizontal= {true} 
        snapToInterval={width} 
        snapToAlignment={"center"}
      >
        {this.state.bookingByWeeks.map((week,i) => (
          <ScheduleWeek key={i} weekText={moment(week.startDate).format('MMMM Do') + " - " + moment(week.endDate).format('MMMM Do')} style={styles.container}>
            {week.bookings.map(booking => <ScheduleDetail key={booking.UUID} {...booking} />)}
          </ScheduleWeek>
        ))} 
      </ScrollView>
    );
    
  }
}

Date.prototype.AddDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    fontSize: 20
  },
  monthContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 30
  },
  monthText: {
      fontSize: 18,
  },
});

