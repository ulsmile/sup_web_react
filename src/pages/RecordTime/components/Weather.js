import React, { PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};

const Weather  = ({windSpeed, windChill, windDirection, humidity, sunrise, sunset, date, temp, text}) => {
   return(
   <div>
     <Card>
       <CardTitle title="天気情報" subtitle="平塚市" />
       <CardText>
         体感温度: {windChill}<br/>
         風速: {windSpeed}<br/>
         風向: {windDirection}<br/>
         湿度: {humidity}<br/>
         日の出: {sunrise}<br/>
         日の入: {sunset}<br/>
         観測日時: {date}<br/>
         観測温度: {temp}<br/>
         天気: {text}<br/>
       </CardText>
     </Card>
   </div>
   );
}

Weather.propTypes = {
  windSpeed: PropTypes.string,
  windChill: PropTypes.string,
  windDirection: PropTypes.string,
  humidity: PropTypes.string,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
  date: PropTypes.string,
  temp: PropTypes.string,
  text: PropTypes.string
}


export default Weather
