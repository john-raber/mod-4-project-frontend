import React from "react";
import { Switch, Route } from "react-router-dom";
import { Well, Image, Button } from "react-bootstrap";

const PlaceCard = ({ place, handleClick }) => {
  return (
    <div>
      <Well bsSize="large" onClick={() => handleClick(place)}>
        <Image src={place.img_url} rounded />
        <h3>{place.name}</h3>
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
