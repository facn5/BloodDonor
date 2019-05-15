import React, { Component } from "react";

import Search from "./search";
class Main extends Component {
  url = "https://jsonplaceholder.typicode.com/todos/1";
  constructor() {
    super();
    this.state = {};
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
      <div>
        <>
          <Search />
          <h1>{this.state.cards.id}</h1>
          <h1>{this.state.cards.completed}</h1>
          <h1>{this.state.cards.title}</h1>
        </>
      </div>
    );
  }
}

export default Main;
