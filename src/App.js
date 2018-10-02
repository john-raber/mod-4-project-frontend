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
      cities: [
        {
          id: 1,
          name: "Washington DC",
          created_at: "2018-09-28T20:09:50.345Z",
          updated_at: "2018-09-28T20:09:50.345Z"
        },
        {
          id: 1,
          name: "Washington DC",
          created_at: "2018-09-28T20:09:50.345Z",
          updated_at: "2018-09-28T20:09:50.345Z"
        },
        {
          id: 1,
          name: "Washington DC",
          created_at: "2018-09-28T20:09:50.345Z",
          updated_at: "2018-09-28T20:09:50.345Z"
        },
        {
          id: 1,
          name: "Washington DC",
          created_at: "2018-09-28T20:09:50.345Z",
          updated_at: "2018-09-28T20:09:50.345Z"
        },
        {
          id: 1,
          name: "Washington DC",
          created_at: "2018-09-28T20:09:50.345Z",
          updated_at: "2018-09-28T20:09:50.345Z"
        },
        {
          id: 1,
          name: "Washington DC",
          created_at: "2018-09-28T20:09:50.345Z",
          updated_at: "2018-09-28T20:09:50.345Z"
        },
        {
          id: 1,
          name: "Washington DC",
          created_at: "2018-09-28T20:09:50.345Z",
          updated_at: "2018-09-28T20:09:50.345Z"
        }
      ],
      trips: [
        {
          id: 1,
          name: "Boring DC",
          user_id: 1,
          date: "2018-10-09T00:00:00.000Z",
          comment: "so much fun",
          places: [
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
              created_at: "2018-09-28T20:09:50.388Z",
              updated_at: "2018-09-28T20:09:50.388Z"
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
              created_at: "2018-09-28T20:09:50.391Z",
              updated_at: "2018-09-28T20:09:50.391Z"
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
              created_at: "2018-09-28T20:09:50.394Z",
              updated_at: "2018-09-28T20:09:50.394Z"
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
              created_at: "2018-09-28T20:09:50.396Z",
              updated_at: "2018-09-28T20:09:50.396Z"
            }
          ]
        },
        {
          id: 3,
          name: "New trip",
          user_id: 1,
          date: null,
          comment: "comments",
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
              created_at: "2018-09-28T20:09:50.379Z",
              updated_at: "2018-09-28T20:09:50.379Z"
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
              created_at: "2018-09-28T20:09:50.384Z",
              updated_at: "2018-09-28T20:09:50.384Z"
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
              created_at: "2018-09-28T20:09:50.388Z",
              updated_at: "2018-09-28T20:09:50.388Z"
            }
          ]
        }
      ],
      places: [
        {
          id: 3,
          name: "Thomas Jefferson Memorial",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
          lat: "38.8814",
          lng: "-77.0365",
          city: {
            id: 1,
            name: "Washington DC",
            created_at: "2018-09-28T20:09:50.345Z",
            updated_at: "2018-09-28T20:09:50.345Z"
          },
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-09-28T20:09:50.437Z",
              updated_at: "2018-09-28T20:09:50.437Z"
            },
            {
              id: 3,
              user_id: 1,
              name: "New trip",
              date: null,
              comment: "comments",
              created_at: "2018-10-02T13:04:11.154Z",
              updated_at: "2018-10-02T13:04:11.154Z"
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
          city: {
            id: 1,
            name: "Washington DC",
            created_at: "2018-09-28T20:09:50.345Z",
            updated_at: "2018-09-28T20:09:50.345Z"
          },
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-09-28T20:09:50.437Z",
              updated_at: "2018-09-28T20:09:50.437Z"
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
          city: {
            id: 1,
            name: "Washington DC",
            created_at: "2018-09-28T20:09:50.345Z",
            updated_at: "2018-09-28T20:09:50.345Z"
          },
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-09-28T20:09:50.437Z",
              updated_at: "2018-09-28T20:09:50.437Z"
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
          city: {
            id: 1,
            name: "Washington DC",
            created_at: "2018-09-28T20:09:50.345Z",
            updated_at: "2018-09-28T20:09:50.345Z"
          },
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-09-28T20:09:50.437Z",
              updated_at: "2018-09-28T20:09:50.437Z"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {
          id: 1,
          name: "Washington Monument",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJlyLR90iqIYw5RjXtq2aSefDgzHJqQ14HVolU8haSfOOlHgjpA",
          lat: "38.8895",
          lng: "-77.035278",
          city: {
            id: 1,
            name: "Washington DC",
            created_at: "2018-09-28T20:09:50.345Z",
            updated_at: "2018-09-28T20:09:50.345Z"
          },
          trips: [
            {
              id: 3,
              user_id: 1,
              name: "New trip",
              date: null,
              comment: "comments",
              created_at: "2018-10-02T13:04:11.154Z",
              updated_at: "2018-10-02T13:04:11.154Z"
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
          city: {
            id: 1,
            name: "Washington DC",
            created_at: "2018-09-28T20:09:50.345Z",
            updated_at: "2018-09-28T20:09:50.345Z"
          },
          trips: [
            {
              id: 3,
              user_id: 1,
              name: "New trip",
              date: null,
              comment: "comments",
              created_at: "2018-10-02T13:04:11.154Z",
              updated_at: "2018-10-02T13:04:11.154Z"
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
          city: {
            id: 1,
            name: "Washington DC",
            created_at: "2018-09-28T20:09:50.345Z",
            updated_at: "2018-09-28T20:09:50.345Z"
          },
          trips: [
            {
              id: 1,
              user_id: 1,
              name: "Boring DC",
              date: "2018-10-09T00:00:00.000Z",
              comment: "so much fun",
              created_at: "2018-09-28T20:09:50.437Z",
              updated_at: "2018-09-28T20:09:50.437Z"
            },
            {
              id: 3,
              user_id: 1,
              name: "New trip",
              date: null,
              comment: "comments",
              created_at: "2018-10-02T13:04:11.154Z",
              updated_at: "2018-10-02T13:04:11.154Z"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        }
      ],
      place_trips: [
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
        },
        {
          id: 13,
          place_id: 1,
          trip_id: 3
        },
        {
          id: 14,
          place_id: 2,
          trip_id: 3
        },
        {
          id: 15,
          place_id: 3,
          trip_id: 3
        }
      ]
    },
    places: [],
    trips: [],
    currentTrip: {},
    cities: [],
    filteredPlaces: null,
    edit: false
  };

  componentDidMount() {
    fetch(`http://localhost:3000/places`)
      .then(r => r.json())
      .then(places => {
        this.setState({
          places: places
        });
      });

    fetch(`http://localhost:3000/trips`)
      .then(r => r.json())
      .then(trips => {
        this.setState({
          trips: trips
        });
      });

    fetch(`http://localhost:3000/cities`)
      .then(r => r.json())
      .then(cities => {
        this.setState({
          cities: cities
        });
      });
  }

  handleToggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  handleUpdateTrip = (id, { name, date, comment }) => {
    fetch(`http://localhost:3000/trips/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name,
        date,
        comment
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(trip => {
        this.setState({
          currentTrip: trip
        });
        this.props.history.push(`/trips/${id}`);
      });
  };

  handleDeleteTrip = id => {
    fetch(`http://localhost:3000/trips/${id}`, {
      method: "DELETE"
    }).then(r => this.props.history.push(`/`));
  };

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

    console.log(selectedPlaceTrip);

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
            exact
            path="/trips/:tripId"
            render={() => (
              <TripContainer
                currentTrip={this.state.currentTrip}
                handleDeletePlace={this.handleDeletePlace}
                handleToggleEdit={this.handleToggleEdit}
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
                trips={this.state.trips}
                handleCreateTrip={this.handleCreateTrip}
                currentUser={this.state.currentUser}
                currentTrip={this.state.currentTrip}
                handleCurrentTrip={this.handleCurrentTrip}
                cities={this.state.cities}
                handleFormFilterChange={this.handleFormFilterChange}
                edit={this.state.edit}
                handleToggleEdit={this.handleToggleEdit}
                handleUpdateTrip={this.handleUpdateTrip}
                handleDeleteTrip={this.handleDeleteTrip}
              />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
