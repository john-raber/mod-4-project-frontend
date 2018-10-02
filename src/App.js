import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomeContainer from "./containers/HomeContainer";
import TripContainer from "./containers/TripContainer";

import "./App.css";

class App extends Component {
  state = {
    currentUser: {
      id: 1,
      name: "Christopher Columbus",
      email: "chris@email.com",
      trips: [
        {
          id: 1,
          name: "Boring DC",
          user_id: 1,
          date: "2018-10-09T00:00:00.000Z",
          comment: "so much fun",
          places: [
            {
              id: 1,
              name: "Washington Monument",
              img_url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
              lat: "38.8895",
              lng: "-77.035278",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              city_id: 1,
              created_at: "2018-10-01T13:07:21.413Z",
              updated_at: "2018-10-01T13:07:21.413Z"
            },
            {
              id: 2,
              name: "Lincoln Memorial",
              img_url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
              lat: "38.8893",
              lng: "-77.0502",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              city_id: 1,
              created_at: "2018-10-01T13:07:21.419Z",
              updated_at: "2018-10-01T13:07:21.419Z"
            },
            {
              id: 3,
              name: "Thomas Jefferson Memorial",
              img_url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
              lat: "38.8814",
              lng: "-77.0365",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              city_id: 1,
              created_at: "2018-10-01T13:07:21.423Z",
              updated_at: "2018-10-01T13:07:21.423Z"
            },
            {
              id: 4,
              name: "United States Capitol",
              img_url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
              lat: "38.8899",
              lng: "-77.0091",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              city_id: 1,
              created_at: "2018-10-01T13:07:21.427Z",
              updated_at: "2018-10-01T13:07:21.427Z"
            },
            {
              id: 5,
              name: "World War II Memorial",
              img_url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
              lat: "38.8894",
              lng: "-77.0405",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              city_id: 1,
              created_at: "2018-10-01T13:07:21.432Z",
              updated_at: "2018-10-01T13:07:21.432Z"
            },
            {
              id: 6,
              name: "Korean War Veterans Memorial",
              img_url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
              lat: "38.8878",
              lng: "-77.0478",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
              city_id: 1,
              created_at: "2018-10-01T13:07:21.437Z",
              updated_at: "2018-10-01T13:07:21.437Z"
            }
          ]
        }
      ],
      places: [
        {
          id: 1,
          name: "Washington Monument",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
          lat: "38.8895",
          lng: "-77.035278",
          city_id: 1,
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-10-01T13:07:21.504Z",
              updated_at: "2018-10-01T13:07:21.504Z"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {
          id: 2,
          name: "Lincoln Memorial",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
          lat: "38.8893",
          lng: "-77.0502",
          city_id: 1,
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-10-01T13:07:21.504Z",
              updated_at: "2018-10-01T13:07:21.504Z"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {
          id: 3,
          name: "Thomas Jefferson Memorial",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
          lat: "38.8814",
          lng: "-77.0365",
          city_id: 1,
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-10-01T13:07:21.504Z",
              updated_at: "2018-10-01T13:07:21.504Z"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {
          id: 4,
          name: "United States Capitol",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
          lat: "38.8899",
          lng: "-77.0091",
          city_id: 1,
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-10-01T13:07:21.504Z",
              updated_at: "2018-10-01T13:07:21.504Z"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {
          id: 5,
          name: "World War II Memorial",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
          lat: "38.8894",
          lng: "-77.0405",
          city_id: 1,
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-10-01T13:07:21.504Z",
              updated_at: "2018-10-01T13:07:21.504Z"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {
          id: 6,
          name: "Korean War Veterans Memorial",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
          lat: "38.8878",
          lng: "-77.0478",
          city_id: 1,
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-10-01T13:07:21.504Z",
              updated_at: "2018-10-01T13:07:21.504Z"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        }
      ],
      place_trips: [
        {
          id: 1,
          place_id: 1,
          trip_id: 1
        },
        {
          id: 2,
          place_id: 2,
          trip_id: 1
        },
        {
          id: 3,
          place_id: 3,
          trip_id: 1
        },
        {
          id: 4,
          place_id: 4,
          trip_id: 1
        },
        {
          id: 5,
          place_id: 5,
          trip_id: 1
        },
        {
          id: 6,
          place_id: 6,
          trip_id: 1
        }
      ]
    },
    places: [],
    currentTrip: {},
    cities: [],
    filteredPlaces: null
  };

  componentDidMount() {
    fetch(`http://localhost:3000/places`)
      .then(response => response.json())
      .then(places => {
        let uniqueCities = new Set();
        places.forEach(p => uniqueCities.add(p.city.name));
        this.setState({
          places: places,
          cities: [...uniqueCities]
        });
      });
  }

  handleCreateTrip = (event, addedPlaces) => {
    fetch(`http://localhost:3000/trips`, {
      method: "POST",
      body: JSON.stringify(this.getFormData(event)),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(trip => {
        console.log(trip);
        let promises = addedPlaces.map(place => {
          return fetch("http://localhost:3000/place_trips", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ trip_id: trip.id, place_id: place.id })
          });
        });
        Promise.all(promises)
          .then(response => {
            fetch(`http://localhost:3000/trips/${trip.id}`)
              .then(response => response.json())
              .then(currentTrip => {
                this.setState({ currentTrip: currentTrip });
                this.props.history.push(`/trips/${trip.id}`);
              });
          })
          .catch(function(err) {
            console.log("A promise failed to resolve", err);
          });
      });
  };

  getFormData = event => {
    event.preventDefault();
    let tripName = event.target.children[0].children[1].value;
    let tripDate = event.target.children[2].children[1].value;
    let tripComment = event.target.children[3].children[1].value;
    let userId = this.state.currentUser.id;
    event.target.reset();
    return {
      name: tripName,
      date: tripDate,
      comment: tripComment,
      user_id: userId
    };
  };

  handleCurrentTrip = trip => {
    this.setState({ currentTrip: trip });
  };

  handleDeletePlace = place => {
    //find place_trip id from currentUser.place_trip with place.id and currentTrip.id
    let selectedPlaceTrip = this.state.currentUser.place_trips.find(
      place_trips =>
        place_trips.place_id === place.id &&
        place_trips.trip_id === this.state.currentTrip.id
    );

    fetch(`http://localhost:3000/place_trips/${selectedPlaceTrip.id}`, {
      method: "DELETE"
    });
  };

  handleFormFilterChange = city => {
    let filteredPlaces = this.state.places.filter(
      place => place.city.name === city
    );
    city === ""
      ? this.setState({ filteredPlaces: "" })
      : this.setState({
          filteredPlaces: filteredPlaces
        });
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route
            path="/trips/:tripId"
            render={() => (
              <TripContainer
                currentTrip={this.state.currentTrip}
                handleDeletePlace={this.handleDeletePlace}
              />
            )}
          />
          <Route
            path="/"
            render={() => (
              <HomeContainer
                places={
                  this.state.filteredPlaces
                    ? this.state.filteredPlaces
                    : this.state.places
                }
                handleCreateTrip={this.handleCreateTrip}
                currentUser={this.state.currentUser}
                handleCurrentTrip={this.handleCurrentTrip}
                cities={this.state.cities}
                handleFormFilterChange={this.handleFormFilterChange}
              />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
