import React from "react";
import { Card, Col } from "react-bootstrap";
import { toFahrenheit } from "../utils/conversions";

const ForecastCard = props => {
  const { weatherDetail } = props;
  const date = weatherDetail.applicable_date;
  console.log(weatherDetail);

  const maxTemperature = weatherDetail.max_temp;
  const maxTemperatureConversion = toFahrenheit(maxTemperature);

  const minTemperature = weatherDetail.min_temp;
  const minTemperatureConversion = toFahrenheit(minTemperature);

  const humidity = weatherDetail.humidity;

  return (
    <Col sm={2}>
      <Card style={{ width: "10rem" }}>
        <Card.Body>
          <Card.Title>{date}</Card.Title>
          <Card.Text>
            High <strong>{maxTemperatureConversion}&deg;F</strong>
          </Card.Text>
          <Card.Text>
            Low <strong>{minTemperatureConversion}&deg;F</strong>
          </Card.Text>
          <Card.Text>
            Humidity <strong>{humidity}%</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ForecastCard;
