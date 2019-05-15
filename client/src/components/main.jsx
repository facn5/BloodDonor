import React, { Component } from "react";
import Card from "./card/card.js";
import Search from "./search";

class Main extends Component {
  url = "https://jsonplaceholder.typicode.com/todos";
  constructor() {
    super();
    this.state = { cards: [] };
  }

  componentDidMount() {
    fetch(this.url)
      .then(d => d.json())
      .then(d => {
        this.setState({ cards: d });
      });
  }
  render() {
    if (!this.state.cards) return <p>Loading...</p>;
    return (
      <>
        <Search />
        {
          (this.state.display = this.state.cards.map(card => (
            <Card
              stationName={"Rambam"}
              location={"Haifa"}
              bloodType={"A+"}
              status={"Critical"}
              street={"s1231"}
              contact={"0526536395"}
              openHours={"11AM - 4PM"}
              mapSrc={
                "https://maps.google.com/maps?q=rambam&t=&z=13&ie=UTF8&iwloc=&output=embed"
              }
            />
          )))
        }
      </>
    );
  }
}

export default Main;
