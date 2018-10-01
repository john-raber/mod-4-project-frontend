import React from "react";
import PlaceCard from "../components/PlaceCard";

import { Grid, Row, Col } from "react-bootstrap";

const CardContainer = () => {
  return (
    <div>
      <Grid>
        Card Container
        <Row className="show-grid">
          <Col xs={4} md={3}>
            <PlaceCard />
          </Col>
          <Col xs={4} md={3}>
            <PlaceCard />
          </Col>
          <Col xs={4} md={3}>
            <PlaceCard />
          </Col>
          <Col xs={4} md={3}>
            <PlaceCard />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default CardContainer;
