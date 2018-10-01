import React, { Fragment } from "react";
import { Grid, Row, Col, PageHeader, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import PlaceCard from "../components/PlaceCard";

const TripContainer = ({ currentTrip, handleDeletePlace }) => {
  return (
    <Fragment>
      {/*Trip Page*/}
      <PageHeader>{currentTrip.name}</PageHeader>
      <Link to="/places">
        <Button>Add Place</Button>
      </Link>

      <Grid>
        <Row className="show-grid">
          <Col md={12} lg={12}>
            <Row className="show-grid">
              {currentTrip.places.map(place => {
                return (
                  <Col md={3} lg={3}>
                    <PlaceCard
                      place={place}
                      handleDeletePlace={handleDeletePlace}
                    />
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
