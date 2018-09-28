import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class TripList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ListGroup>
        <ListGroupItem bsStyle="warning">Trip Name 1</ListGroupItem>
        <ListGroupItem bsStyle="warning">Trip Name 2</ListGroupItem>
      </ListGroup>
    );
  }
}

export default TripList;
