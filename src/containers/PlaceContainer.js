import React, { Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import PlaceCard from "../components/PlaceCard";

const PlaceContainer = ({ places }) => {
  return (
    <Fragment>
      <Grid>
        <Row className="show-grid">
          <Col lg={8}>
            <Row className="show-grid">
              {places.map(p => {
                return (
                  <Col lg={6}>
                    <PlaceCard place={p} />
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

export default PlaceContainer;
