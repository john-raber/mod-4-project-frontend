import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Well,
  Image
} from "react-bootstrap";

class TripForm extends Component {
  state = {
    name: "",
    city: "",
    date: "",
    comment: ""
  };

  handleFormChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    console.log("TripForm", this.props.cities);
    return (
      <Form
        onSubmit={event => {
          console.log("onSubmit", this.props.addedPlaces);
          this.props.handleCreateTrip(event, this.props.addedPlaces);
        }}
      >
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            name="name"
            onChange={e => {
              this.handleFormChange(e.target.name, e.target.value);
            }}
            type="text"
            placeholder="Name your trip!"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>City</ControlLabel>
          <FormControl
            name="city"
            onChange={e => {
              this.handleFormChange(e.target.name, e.target.value);
              this.props.handleFormFilterChange(e.target.value);
            }}
            componentClass="select"
          >
            <option value="">Select a city</option>
            {this.props.cities.map(city => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Date</ControlLabel>
          <FormControl
            name="date"
            onChange={e => {
              this.handleFormChange(e.target.name, e.target.value);
            }}
            type="text"
            placeholder="Pick your date!"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Comment</ControlLabel>
          <FormControl
            name="comment"
            onChange={e => {
              this.handleFormChange(e.target.name, e.target.value);
            }}
            componentClass="textarea"
            placeholder="Write some notes!"
          />
        </FormGroup>
        <Well>
          {this.props.addedPlaces.map(p => {
            return <Image src={p.img_url} rounded />;
          })}
        </Well>
        <Button type="submit">Create Trip</Button>
      </Form>
    );
  }
}

export default TripForm;
