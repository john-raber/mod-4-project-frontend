import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
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
    if (this.props.edit) {
      this.setState({
        name: this.props.currentTrip.name,
        city: this.props.currentTrip.places[0].city.name,
        date: this.props.currentTrip.date,
        comment: this.props.currentTrip.comment
      });
      this.props.handleToggleEdit();
    }
    return (
      <Switch>
        <Route
          exact
          path="/trips/:tripId/places"
          render={() => {
            return (
              <Form>
                <FormGroup>
                  <ControlLabel>Name</ControlLabel>
                  <FormControl
                    name="name"
                    onChange={e => {
                      this.handleFormChange(e.target.name, e.target.value);
                    }}
                    type="text"
                    placeholder="Name your trip!"
                    value={this.state.name}
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
                    value={this.state.city}
                  >
                    <option value="">Select a city</option>
                    {this.props.cities.map(city => (
                      <option value={city.name} key={city.id}>
                        {city.name}
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
                    value={this.state.date}
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
                    value={this.state.comment}
                  />
                </FormGroup>
                <Well>
                  <h5>Selected Places:</h5>
                  {this.props.currentTrip.places.map(p => {
                    return (
                      <Fragment>
                        <Image src={p.img_url} rounded />
                        <h5>{p.name}</h5>
                      </Fragment>
                    );
                  })}
                </Well>
                <Button type="submit" bsClass="custom-button">
                  Save
                </Button>
              </Form>
            );
          }}
        />
        <Route>
          <Form
            bsClass="custom-form"
            onSubmit={event => {
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
                  <option value={city.name} key={city.id}>
                    {city.name}
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
              <h5>Selected Places:</h5>
              {this.props.addedPlaces.map(p => {
                return (
                  <Fragment>
                    <Image src={p.img_url} rounded />
                    <h5>{p.name}</h5>
                  </Fragment>
                );
              })}
            </Well>
            <Button type="submit" bsClass="custom-button">
              Create Trip
            </Button>
          </Form>
        </Route>
      </Switch>
    );
  }
}

export default TripForm;
