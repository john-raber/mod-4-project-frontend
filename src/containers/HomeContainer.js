import React from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

import TripForm from "../components/TripForm";
import PlaceContainer from "./PlaceContainer";

const HomeContainer = () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col lg={8}>
          <PageHeader>Most Popular Places!</PageHeader>
          <PlaceContainer />
        </Col>
        <Col lg={4}>
          <TripForm />
        </Col>
      </Row>
    </Grid>
  );
};

export default HomeContainer;
