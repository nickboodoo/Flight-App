import React, { Component } from 'react';

/* Store accessKey for api so that we can test the program.
This will eventually need to be placed outside of the application for security. 
Alternatively, user can supply an access key and we can place it into the program with listener or getInput. */
var accessKey = "64e18e3e875b916a3ebf5c4fff28b740";

/* Create asynchronous function that will fetch data from AviationStack API. */
async function getData(url = "") {
  const response = await fetch(url, {
    method: "GET",
    cache: "no-cache",
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })

  /* Parse JSON response into native JavaScript objects. */
  return response.json();
}

/* Create searchbar using React component to get Flight Number from user. Use Flight Number to create a query.
Return list of flights by looping through queried JSON file and display results to user. */
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* Create search bar to ask user for input. */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Enter Flight Number' />
        <input type="submit" value="Search!" />
      </form>
    );
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  /* Functionality that will return flights for a given flight number (IATA value). */
  handleSubmit(event) {

    /* Store user input as IATA value. */
    var testIATA = this.state.value;

    /* Prevent browser refresh */
    event.preventDefault();

    /* Prevent the program from returning every flight in the database upon no input. */
    if (testIATA == "") {
      return
    }

    /* Pass api access link, key and user input to getData function.
    Retrieve JSON file containing relevant flight data. */
    getData("http://api.aviationstack.com/v1/flights?access_key=" +
      accessKey + "&flight_iata=" + testIATA).then((response) => {
        console.log(response);

        /* Loop through JSON and parse data for query result. */
        for (var entry of response.data) {
          document.getElementById("container").innerHTML += (
            "<div class='flight-data'>" +
            "<p> Flight Number: " + entry.flight.number + "</p>" +
            "<p> Flight Date: " + entry.flight_date + "</p>" +
            "<p> Gate: " + entry.arrival.gate + "</p>" +
            "<p> Terminal: " + entry.arrival.terminal + "</p>" +
            "<p> Flight Status: " + entry.flight_status + "</p>" +
            "<p> Departure Airport: " + entry.departure.airport + "</p>" +
            "<p> Arrival Airport: " + entry.arrival.airport + "</p>" +
            "</div>"
          );
        }
      });
  }
}

export default SearchForm;
