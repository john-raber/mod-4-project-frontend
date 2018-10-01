import React, { Fragment } from "react";
import { Grid, Row, Col, PageHeader, Button } from "react-bootstrap";

import PlaceCard from "../components/PlaceCard";

const TripContainer = ({ currentTrip }) => {
  return (
    <Fragment>
      {/*Trip Page*/}
      <PageHeader>{currentTrip.name}</PageHeader>
      <Button>Add Place</Button>
      <Grid>
        <Row className="show-grid">
          <Col md={12} lg={12}>
            <Row className="show-grid">
              {currentTrip.places.map(place => {
                return (
                  <Col md={3} lg={3}>
                    <PlaceCard place={place} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Grid>
    </Fragment>
  );
};

export default TripContainer;
