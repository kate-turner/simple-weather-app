import React from "react";
import "./styles.css";
import { Container, Col, Row } from "react-bootstrap";
import CurrentDisplay from "../CurrentDisplay";
import ExtendedForecast from "../ExtendedForecast";
import LocationForm from "../LocationForm";
import ErrorPage from "../ErrorPage.js";

class App extends React.Component {
  state = {
    city: undefined,
    weatherData: undefined,
    error: undefined
  };

  getWeather = async event => {
    event.preventDefault();
    try {
      const city = event.target.elements.city.value;
      const api_call = await fetch(`/api/location/search/?query=${city}`);
      const response = await api_call.json();
      const woeid = response[0].woeid;
      const api_callWoeid = await fetch(`/api/location/${woeid}/`);
      const response2 = await api_callWoeid.json();
      this.setState({
        city: city,
        weatherData: response2,
        error: ""
      });
    } catch (err) {
      console.error(err);
      this.setState({
        city: undefined,
        weatherData: undefined,
        error: "Something went wrong"
      });
    }
  };

  render() {
    return (
      <div>
        <LocationForm getWeather={this.getWeather} />
        <div className="wrapper">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <div className="main">
                  {this.state.weatherData && (
                    <div>
                      <CurrentDisplay
                        weatherData={this.state.weatherData}
                        city={this.state.city}
                      />
                      <ExtendedForecast weatherData={this.state.weatherData} />
                    </div>
                  )}
                  {this.state.error && <ErrorPage error={this.state.error} />}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
