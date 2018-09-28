import React, { Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import PlaceCard from "../components/PlaceCard";

const PlaceContainer = () => {
  return (
    <Fragment>
      <Grid>
        <Row className="show-grid">
          <Col lg={8}>
            <Row className="show-grid">
              <Col lg={4}>
                <PlaceCard />
              </Col>
              <Col lg={4}>
                <PlaceCard />
              </Col>
              <Col lg={4}>
                <PlaceCard />
              </Col>
              <Col lg={4}>
                <PlaceCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Fragment>
  );
};

export default PlaceContainer;
