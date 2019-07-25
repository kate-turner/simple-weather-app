import React from "react";
import DataDisplay from "../DataDisplay";
import ExtendedForecast from "../ExtendedForecast";
import WeatherInput from "../WeatherInput";
import { toFahrenheit } from "../../utils/conversions";

class App extends React.Component {
  state = {
    city: undefined,
    weatherData: undefined
  };

  getWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_call = await fetch(`/api/location/search/?query=${city}`);
    const response = await api_call.json();
    const woeid = response[0].woeid;
    const api_callWoeid = await fetch(`/api/location/${woeid}/`);
    const response2 = await api_callWoeid.json();
    if (city) {
      this.setState({
        weatherData: response2
      });
    }
    // const temperatureValue = response2.consolidated_weather[0].max_temp;
    // const temperatureConversion = toFahrenheit(temperatureValue);
    // console.log(temperatureConversion);
  };

  render() {
    return (
      <div className="App">
        <WeatherInput getWeather={this.getWeather} />
        {this.state.weatherData && (
          <div>
            <DataDisplay weatherData={this.state.weatherData} />
            <ExtendedForecast weatherData={this.state.weatherData} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
