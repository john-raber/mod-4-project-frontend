import React, { Fragment } from "react";
import { Grid, Row, Col, PageHeader, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import PlaceCard from "../components/PlaceCard";

const TripContainer = ({
  currentTrip,
  handleDeletePlace,
  handleToggleEdit
}) => {
  return (
    <Fragment>
      {/*Trip Page*/}
      <PageHeader bsClass="custom-trip-page">
        Trip: {currentTrip.name}{" "}
        <small>{currentTrip.places[0].city.name}</small>
      </PageHeader>

      <Link to={`/trips/${currentTrip.id}/places`}>
        <Button
          bsClass="custom-button custom-trip-page"
          onClick={handleToggleEdit}
        >
          Edit Trip
        </Button>
      </Link>

      <Grid>
        <Row className="show-grid">
          <Col sm={12} md={12} lg={12}>
            <Row className="show-grid">
              {currentTrip.places.map(place => {
                return (
                  <Col key={place.id} sm={4} md={3} lg={3}>
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
