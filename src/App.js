import React, { Component } from "react";
import "./App.css";
import WishlisterLogo from "./components/WishlisterLogo";
import Input from "./components/Input";
import WishlistCards from "./components/WishlistCards";
import data from "./components/data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      release: "hola",
      data: data.Index,
      rating: 0,
    };
  }

  handleObjectSubmit = (card) => {
    this.setState({ data: [card, ...this.state.data] });
  };

  addUserPrice = (id, price) => {
    let stateCopy = [];
    for (let i = 0; i < this.state.data.length; i++) {
      stateCopy[i] = this.state.data[i];
      if (stateCopy[i].id == id) {
        stateCopy[i] = { ...stateCopy[i], userPrice: price };
      }
    }
    this.setState({ data: stateCopy });
  };

  render() {
    return (
      <div className="App">
        <WishlisterLogo />
        <Input handleObjectSubmit={this.handleObjectSubmit} />
        <WishlistCards
          rating={this.state.rating}
          Index={this.state.data}
          addUserPrice={this.addUserPrice}
        />
      </div>
    );
  }
}

export default App;
