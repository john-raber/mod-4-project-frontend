import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

import TripForm from "../components/TripForm";
import PlaceContainer from "./PlaceContainer";
import TripList from "../components/TripList";
import CityFilter from "../components/CityFilter";

class HomeContainer extends Component {
  render() {
    console.log(this.props);
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
                    places={this.props.places}
                    handleAddPlace={this.props.handleAddPlace}
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
                    handleSetAddedPlaces={this.props.handleSetAddedPlaces}
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
                    handleAddPlace={this.props.handleAddPlace}
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
              addedPlaces={this.props.addedPlaces}
              handleCreateTrip={this.props.handleCreateTrip}
              cities={this.props.cities}
              handleFormFilterChange={this.props.handleFormFilterChange}
              handleToggleEdit={this.props.handleToggleEdit}
              handleUpdateTrip={this.props.handleUpdateTrip}
              handleRemovePlace={this.props.handleRemovePlace}
              handleUpdatePlaceTrips={this.props.handleUpdatePlaceTrips}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomeContainer;
