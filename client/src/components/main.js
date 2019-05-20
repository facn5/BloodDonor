import React, { Component } from "react";
import "./styles.css";
import Spinner from "react-spinner-material";
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
      .then(res => res.json())
      .then(d => {
        this.setState({
          cards: d.data.map(card => {
            return { ...card, active: false };
          })
        });
      });
  }

  updateDisplay = id => {
    this.state.cards.map(card => {
      if (card._id === id) {
        card.active = !card.active;
      } else card.active = false;
    });
    this.setState({ state: this.state });
  };

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
          <Spinner
            className="spinner"
            size={60}
            spinnerColor={"#333"}
            spinnerWidth={2}
            visible={true}
          />
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

        {cards
          .filter(card => {
            if (
              card.card.stationName
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              card.card.location.toLowerCase().includes(search.toLowerCase()) ||
              card.card.bloodType.toLowerCase().includes(search.toLowerCase())
            )
              return card.card;
          })
          .slice(0, 10)
          .map((card, index) => (
            <Card
              index={"card" + index}
              id={card._id}
              stationName={card.card.stationName}
              location={card.card.location}
              bloodType={card.card.bloodType}
              status={card.card.status}
              street={card.card.street}
              contact={card.card.contact}
              openHours={card.card.openHours}
              mapSrc={card.card.mapSrc}
              active={card.active}
              triggerDisplay={this.updateDisplay}
            />
          ))}
      </>
    );
  }
}

export default Main;
