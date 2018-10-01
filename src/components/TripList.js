import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class TripList extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.currentUser.trips.map(trip => {
          return (
            <ListGroupItem bsStyle="warning" key={trip.id}>
              {trip.name}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}

export default TripList;
