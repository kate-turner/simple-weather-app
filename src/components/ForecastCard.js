import React from "react";
import { toFahrenheit } from "../utils/conversions";

const ForecastCard = props => {
  const { weatherDetail } = props;
  const temperature = weatherDetail.max_temp
  const temperatureConversion = toFahrenheit(temperature);
  
  return <div>Temperature is {temperatureConversion}</div>;
};

export default ForecastCard;
