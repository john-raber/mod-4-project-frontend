import React from "react";
import { Switch, Route } from "react-router-dom";
import { Well, Image, Button } from "react-bootstrap";

const PlaceCard = ({ place, handleClick, handleDeletePlace }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/trips/:tripId">
          <Well bsSize="large">
            <Image src={place.img_url} rounded responsive />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <Button
              bsClass="custom-button"
              onClick={() => handleDeletePlace(place)}
            >
              Delete
            </Button>
          </Well>
        </Route>
        <Route path="/">
          <Well bsSize="large" onClick={() => handleClick(place)}>
            <Image src={place.img_url} rounded responsive />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </Well>
        </Route>
      </Switch>
    </div>
  );
};

export default PlaceCard;
