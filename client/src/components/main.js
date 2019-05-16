import React, { Component } from "react";
import "./styles.css";

import Card from "./card/card.js";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      cards: [],
      str: ""
    };
    this.url = "/getCards";
  }

  componentDidMount() {
    fetch(this.url)
      .then(d => d.json())
      .then(d => {
        this.setState({ cards: d });
      });
  }

  handleSearch(e) {
    this.setState({ search: e.target.value });
  }
  render() {
    const { cards, search } = this.state;
    if (cards.length === 0)
      return (
        <div className="input">
          <input
            type="search"
            value={search}
            onChange={this.handleSearch.bind(this)}
            placeholder="Type here"
          />
          <p>Loading..</p>
        </div>
      );
    return (
      <>
        <input
          type="search"
          value={search}
          onChange={this.handleSearch.bind(this)}
          placeholder="Type here"
        />
        <hr />

        {cards.data
          .filter(c => {
            console.log(c);

            if (
              c.card.stationName.toLowerCase().includes(search.toLowerCase()) ||
              c.card.location.toLowerCase().includes(search.toLowerCase()) ||
              c.card.bloodType.toLowerCase().includes(search.toLowerCase())
            )
              return c.card;
          })
          .slice(0, 10)
          .map(card => (
            <Card
              stationName={card.stationName}
              location={card.location}
              bloodType={card.bloodType}
              status={card.status}
              street={card.street}
              contact={card.contact}
              openHours={card.openHours}
              mapSrc={card.mapSrc}
            />
          ))}
      </>
    );
  }
}

export default Main;
