import React from "react";
import moment from "moment";
import { StyleSheet, Text, ScrollView, Dimensions, View, Image, TouchableHighlight } from "react-native";
import BaseView from "./BaseView"; 
import ScheduleWeek from "../Components/ScheduleWeek";
import ScheduleDetail from "../Components/ScheduleDetail";
import { SALMON, BROWN } from "../constants";
const { width, height } = Dimensions.get('window');
import firebase from "firebase";

export default class ScheduleWeekView extends BaseView {
  constructor(props) {
    super(props);
    this.today = moment().day()
    this.thisMonth = moment().format('MMMM')
    this.firstOfWeek = moment().startOf('week').format("Do")
    this.lastOfWeek = moment().endOf('week').format("Do")
    this.state = {
      bookingByWeeks: [],
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

  _rangeTextFormatter(week) {
    let startDate = moment(week.startDate).format("MMMM Do")
    let endDate = moment(week.endDate).format("MMMM Do")
    return `${startDate} - ${endDate}`
  }

  _renderAllScheduleDays() {
    return (
      <ScrollView
          style={styles.scrollview} 
          onLayout={event => {
            // Handle rotation
            let { x, y, width, height } = event.nativeEvent.layout;
            this.setState({ deviceWidth: width });
          }} pagingEnabled={true} horizontal={true}>
          {this.state.bookingByWeeks.map(week => {
            let range = this._rangeTextFormatter(week);
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
    )
  }

  _renderNoScheduleDays() {
    return (
      <View style={styles.noScheduledBookings}>
        <Text style={styles.noScheduledBookingsText}>It looks like you haven't made your schedule for the upcoming weeks. Use the plus icon below to choose the days you want to work!</Text>
      </View>
    )
  }

  _renderSection(){
    return this.state.bookingByWeeks.length > 0 ? this._renderAllScheduleDays() : this._renderNoScheduleDays()
  }

  componentDidMount() {
    fetch("https://foodu-api.herokuapp.com/api/v1/bookings")
    .then(response => response.json())
    .catch(error => console.error(error))
    .then(myJson => {
      return myJson.map(x => {
        return {
          date: x.date,
          name: x.name,
          address: x.address_street + ", " + x.address_city + " " + x.address_state + ", " + x.address_zip ,
          timeRange: x.time_range
        }
      })
    })
    .then(items => {
      let weeks = this.sortIntoWeeks(items)
      if(weeks.length > 0){
        this.setState({ bookingByWeeks: weeks })
      } else {
        this.setState({ bookingByWeeks: [] })
      }
    })
  }

  render() {;
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        {this._renderSection()}
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
  noScheduledBookings: {
    flex: 1,
    margin: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  noScheduledBookingsText: {
    fontFamily: 'montserrat',
    fontSize: 18,
    color: SALMON,
    textAlign: 'center',
    lineHeight: 45
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
