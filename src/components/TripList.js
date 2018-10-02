import React, { Fragment } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class TripList extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.trips
          .filter(trip => {
            return trip.user_id === this.props.currentUser.id;
          })
          .map(trip => {
            return (
              <Fragment key={trip.id}>
                <Link to={`/trips/${trip.id}`}>
                  <ListGroupItem
                    bsStyle="warning"
                    key={trip.id}
                    onClick={() => this.props.handleCurrentTrip(trip)}
                  >
                    {trip.name}
                  </ListGroupItem>
                </Link>
                <Button
                  onClick={event => this.props.handleDeleteTrip(trip.id)}
                  bsClass="custom-button"
                >
                  Delete
                </Button>
              </Fragment>
            );
          })}
      </ListGroup>
    );
  }
}

export default TripList;
