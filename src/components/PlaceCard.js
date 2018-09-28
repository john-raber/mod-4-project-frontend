import React from "react";
import { Switch, Route } from "react-router-dom";
import { Well, Image, Button } from "react-bootstrap";

const PlaceCard = ({ place }) => {
  return (
    <div>
      <Well bsSize="large">
        <h3>{place.name}</h3>
        <Image src={place.img_url} rounded />
        <p>{place.description}</p>
        <Switch>
          <Route path="/trips/:tripId">
            <Button>Delete</Button>
          </Route>
        </Switch>
      </Well>
    </div>
  );
};

export default PlaceCard;
