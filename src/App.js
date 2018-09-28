import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomeContainer from "./containers/HomeContainer";
import TripContainer from "./containers/TripContainer";

import "./App.css";

class App extends Component {
  state = {
    currentUser: [],
    places: []
  };

  componentDidMount() {
    fetch(`http://localhost:3001/users`)
      .then(response => response.json())
      .then(users => console.log(users));
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/trips/:tripId" component={TripContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
