import React from "react";

const DataDisplay = props => (
  <div>
  {
    props.weatherData && <p>The Weather is {props.weatherData.consolidated_weather[0].max_temp}</p>
  }
  </div>
);

export default DataDisplay;
