import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { toFahrenheit } from "../utils/conversions";

const CurrentDisplay = props => {
  const { weatherData } = props;
  const weatherDetail = weatherData.consolidated_weather[0];

  const currentTemperature = weatherDetail.the_temp;
  const currentTemperatureConversion = toFahrenheit(currentTemperature);

  const maxTemperature = weatherDetail.max_temp;
  const maxTemperatureConversion = toFahrenheit(maxTemperature);

  const minTemperature = weatherDetail.min_temp;
  const minTemperatureConversion = toFahrenheit(minTemperature);

  const humidity = weatherDetail.humidity;

  return (
    <div>
      <Container>
        <Row>
          <h2>Today</h2>
          <Col sm={6}>
            <h4>{currentTemperatureConversion}&deg;F</h4>
            <p>{weatherDetail.weather_state_name}</p>
            <p>{props.city}</p>
          </Col>
          <Col sm={6}>
            <p>
              High <strong>{maxTemperatureConversion}&deg;F</strong>
            </p>
            <p>
              Low <strong>{minTemperatureConversion}&deg;F</strong>
            </p>
            <p>
              Humidity <strong>{humidity}%</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CurrentDisplay;
