import React, { Component } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class SimpleCalender extends Component {
  render() {
    return (
        <Calendar 
          current={'2012-03-01'}
          minDate={'2012-05-10'}
          maxDate={'2012-05-30'}
          onDayPress={(day) => {console.log('selected day', day)}}
          monthFormat={'yyyy MM'}
          onMonthChange={(month) => {console.log('month changed', month)}}
          hideArrows={true}
          renderArrow={(direction) => (<Arrow />)}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
        />
    );
  }
}
