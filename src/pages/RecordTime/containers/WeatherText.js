import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import Weather from '../components/Weather'

const mapStateToProps = (state) => {
  return {
    windSpeed: state.recordTimeReducers.windSpeed,
    windChill: state.recordTimeReducers.windChill,
    windDirection: state.recordTimeReducers.windDirection,
    humidity: state.recordTimeReducers.humidity,
    sunrise: state.recordTimeReducers.sunrise,
    sunset: state.recordTimeReducers.sunset,
    date: state.recordTimeReducers.date,
    temp: state.recordTimeReducers.temp,
    text: state.recordTimeReducers.text
  }
}

const WeatherText = connect(
  mapStateToProps
)(Weather)

export default WeatherText
