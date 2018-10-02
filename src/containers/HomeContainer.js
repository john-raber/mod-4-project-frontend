import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

import TripForm from "../components/TripForm";
import PlaceContainer from "./PlaceContainer";
import TripList from "../components/TripList";
import CityFilter from "../components/CityFilter";

class HomeContainer extends Component {
  state = {
    addedPlaces: []
  };

  handleRemovePlace = place => {
    let currentPlaces = [...this.state.addedPlaces];
    let index = currentPlaces.indexOf(place);
    currentPlaces.splice(index, 1);
    this.setState({
      addedPlaces: currentPlaces
    });
  };

  handleAddPlace = place => {
    let currentPlaces = [...this.state.addedPlaces];
    !currentPlaces.includes(place) ? currentPlaces.push(place) : null;

    this.setState({
      addedPlaces: currentPlaces
    });
  };

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col lg={8}>
            <Switch>
              <Route exact path="/trips/:tripId/places">
                <Fragment>
                  <PageHeader>
                    Places! <small>Click on a place to add to your trip</small>
                  </PageHeader>

                  <CityFilter
                    bsClass="custom-city-filter"
                    cities={this.props.cities}
                    handleFormFilterChange={this.props.handleFormFilterChange}
                  />
                  <PlaceContainer
                    handleClick={this.handleAddPlace}
                    places={this.props.places}
                  />
                </Fragment>
              </Route>
              {/* If route is /trips -- we show the TripList */}
              <Route exact path="/trips">
                <Fragment>
                  <PageHeader>Trips</PageHeader>
                  <TripList
                    currentUser={this.props.currentUser}
                    trips={this.props.trips}
                    handleCurrentTrip={this.props.handleCurrentTrip}
                    handleDeleteTrip={this.props.handleDeleteTrip}
                  />
                </Fragment>
              </Route>
              {/* If route is / -- we show the PlaceContainer */}
              <Route path="/">
                <Fragment>
                  {/* If route is /places or / we show the matching header
                    and CityFilter for /places */}
                  <Switch>
                    <Route exact path="/places">
                      <Fragment>
                        <PageHeader>
                          Places!{" "}
                          <small>Click on a place to add to trip form</small>
                        </PageHeader>

                        <CityFilter
                          bsClass="custom-city-filter"
                          cities={this.props.cities}
                          handleFormFilterChange={
                            this.props.handleFormFilterChange
                          }
                        />
                      </Fragment>
                    </Route>
                    <Route path="/">
                      <PageHeader>Most Popular Places!</PageHeader>
                    </Route>
                  </Switch>
                  <PlaceContainer
                    handleClick={this.handleAddPlace}
                    places={this.props.places}
                  />
                </Fragment>
              </Route>
            </Switch>
          </Col>
          <Col lg={4}>
            <TripForm
              edit={this.props.edit}
              currentTrip={this.props.currentTrip}
              addedPlaces={this.state.addedPlaces}
              handleCreateTrip={this.props.handleCreateTrip}
              cities={this.props.cities}
              handleFormFilterChange={this.props.handleFormFilterChange}
              handleToggleEdit={this.props.handleToggleEdit}
              handleUpdateTrip={this.props.handleUpdateTrip}
              handleRemovePlace={this.handleRemovePlace}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomeContainer;
