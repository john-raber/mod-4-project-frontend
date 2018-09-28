import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

import TripForm from "../components/TripForm";
import PlaceContainer from "./PlaceContainer";
import TripList from "../components/TripList";

const HomeContainer = () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col lg={8}>
          <Switch>
            <Route exact path="/trips">
              <Fragment>
                <PageHeader>Trips</PageHeader>
                <TripList />
              </Fragment>
            </Route>
            <Route path="/">
              <Fragment>
                <PageHeader>Most Popular Places!</PageHeader>
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
