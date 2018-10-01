import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class TripList extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.currentUser.trips.map(trip => {
          return (
            <Link to={`/trips/${trip.id}`}>
              <ListGroupItem
                bsStyle="warning"
                key={trip.id}
                onClick={() => this.props.handleCurrentTrip(trip)}
              >
                {trip.name}
              </ListGroupItem>
            </Link>
          );
        })}
      </ListGroup>
    );
  }
}

export default TripList;
