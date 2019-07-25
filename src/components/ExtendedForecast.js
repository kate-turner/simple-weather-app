import React from "react";
import _ from 'lodash'
import ForecastCard from './ForecastCard';

const ExtendedForecast = props => {
    const {weatherData} = props
    const weatherDetails = weatherData.consolidated_weather

    return (
    <div>
    Extended Forecast here
    {_.map(weatherDetails, weatherDetail => (
        <ForecastCard weatherDetail={weatherDetail}/>
    ))}
    </div>
    )};
  
  export default ExtendedForecast;