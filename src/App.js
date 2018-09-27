import React, { Component } from 'react';
import NavBar from './components/NavBar';
import TravelContainer from './containers/TravelContainer';

import './App.css';

class App extends Component {
  componentDidMount() {
    fetch(`http://localhost:3000/users`)
    .then(response => response.json())
    .then(users => console.log(users))
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <TravelContainer />

      </div>
    );
  }
}

export default App;
