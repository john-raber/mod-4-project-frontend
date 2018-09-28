import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

import TripForm from "../components/TripForm";
import PlaceContainer from "./PlaceContainer";
import TripList from "../components/TripList";
import CityFilter from "../components/CityFilter";

const HomeContainer = () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col lg={8}>
          <Switch>
            {/* If route is /trips -- we show the TripList */}
            <Route exact path="/trips">
              <Fragment>
                <PageHeader>Trips</PageHeader>
                <TripList />
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
                      <PageHeader>Places!</PageHeader>
                      <CityFilter />
                    </Fragment>
                  </Route>
                  <Route path="/">
                    <PageHeader>Most Popular Places!</PageHeader>
                  </Route>
                </Switch>
                <PlaceContainer />
              </Fragment>
            </Route>
          </Switch>
        </Col>
        <Col lg={4}>
          <TripForm />
        </Col>
      </Row>
    </Grid>
  );
};

export default HomeContainer;
