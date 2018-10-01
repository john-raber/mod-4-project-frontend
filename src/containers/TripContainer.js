import React, { Fragment } from "react";
import { Grid, Row, Col, PageHeader, Button } from "react-bootstrap";

import PlaceCard from "../components/PlaceCard";

const TripContainer = () => {
  return (
    <Fragment>
      {/*Trip Page*/}
      <PageHeader>Trip Name</PageHeader>
      <Button>Add Place</Button>
      <Grid>
        <Row className="show-grid">
          <Col md={12} lg={12}>
            <Row className="show-grid">
              <Col md={3} lg={3}>
                <PlaceCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Fragment>
  );
};

export default TripContainer;
