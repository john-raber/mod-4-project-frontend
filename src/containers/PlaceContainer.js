import React, { Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import PlaceCard from "../components/PlaceCard";

const PlaceContainer = ({ places, handleClick }) => {
  return (
    <Fragment>
      <Grid>
        <Row className="show-grid">
          <Col sm={12} md={8} lg={8}>
            <Row className="show-grid">
              {places.map(p => {
                return (
                  <Col sm={4} md={4} lg={4} key={p.id}>
                    <PlaceCard handleClick={handleClick} place={p} />
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
