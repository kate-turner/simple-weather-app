import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Navbar,
  NavbarBrand,
  Col,
  Row
} from "react-bootstrap";

const LocationForm = props => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Row>
          <Col sm={6} xs={6}>
            <NavbarBrand>HAPPY SKY</NavbarBrand>
          </Col>

          <Col sm={6} xs={6}>
            <Form inline onSubmit={props.getWeather}>
              <FormGroup role="form">
                <FormControl
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  className="search-bar"
                />
                <Button
                  variant="outline-info"
                  type="submit"
                  className="search-button"
                >
                  Search
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
};

export default LocationForm;
