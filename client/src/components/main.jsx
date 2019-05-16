import React, { Component } from "react";
import Card from "./card/card.js";
import Search from "./search";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      cards: [
        {
          stationName: "zzzzzzzzzzzzzzzzzzzzRambam",
          location: "Haifa",
          bloodType: "A+",
          status: "Critical",
          street: "s1231",
          contact: "0526536395",
          openHours: "11AM - 4PM",
          mapSrc:
            "https://maps.google.com/maps?q=rambam&t=&z=13&ie=UTF8&iwloc=&output=embed"
        }
      ],
      str: ""
    };
    this.url = "https://jsonplaceholder.typicode.com/todos";
  }

  componentDidMount() {
    fetch(this.url)
      .then(d => d.json())
      .then(d => {
        this.setState({ cards: d });
      });
  }

  handleSearch(e) {
    console.log(e.target.value);

    this.setState({ search: e.target.value });
  }
  render() {
    const { cards, search } = this.state;
    if (!cards) return <p>Loading..</p>;
    return (
      <>
        <input
          type="text"
          value={search}
          onChange={this.handleSearch.bind(this)}
          placeholder="Type here"
        />
        <hr />

        {cards
          .filter(card => {
            console.log(card);

            if (card.stationName.includes(search) > -1) return card;
          })
          .slice(0, 0)
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
