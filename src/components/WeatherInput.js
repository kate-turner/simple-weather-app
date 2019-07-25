import React from "react";

const WeatherInput = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Enter City" />
      <button>Get Weather</button>
    </form>
  );
};

export default WeatherInput;
