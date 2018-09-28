import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import TravelContainer from "./containers/TravelContainer";
import HomeContainer from "./containers/HomeContainer";

import "./App.css";

class App extends Component {
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
          <Route path="/" component={HomeContainer} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
