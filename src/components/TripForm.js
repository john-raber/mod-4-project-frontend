import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

class TripForm extends Component {
  state = {
    name: "",
    city: "",
    date: "",
    comment: ""
  };
  render() {
    return (
      <Form>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" placeholder="Name your trip!" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>City</ControlLabel>
          <FormControl componentClass="select" placeholder="Pick your city!">
            <option value="Washington DC">Washington DC</option>
            <option value="New York">New York</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Date</ControlLabel>
          <FormControl type="text" placeholder="Pick your date!" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Comment</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Write some notes!"
          />
        </FormGroup>
        <Button type="submit">Create Trip</Button>
      </Form>
    );
  }
}

export default TripForm;
