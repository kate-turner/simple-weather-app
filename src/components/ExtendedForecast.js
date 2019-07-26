import React from "react";
import _ from "lodash";
import { Container, Row } from "react-bootstrap";
import ForecastCard from "./ForecastCard";


const ExtendedForecast = props => {
  const { weatherData } = props;
  const weatherDetails = weatherData.consolidated_weather;
  console.log(weatherDetails);
  return (
    <div>
      <h2>Forecast</h2>
      <Container>
        <Row>
          {_.map(weatherDetails, weatherDetail => (
            <ForecastCard
              weatherDetail={weatherDetail}
              key={weatherDetail.id}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ExtendedForecast;
