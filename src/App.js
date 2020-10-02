
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
    };
  }


  // create a method to collect the users input and save it in the state
  // function to split the id of the release and add it to the fetch wiht string interpolation
  // fetch from the API using the user's input information
  // save the data from the API on the state
  // Make the array for the wishlist items in the state

  // componentDidMount() {
  //   this.fetchData();
  // }

  // fetchData = (id) => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ dataArray: data.data }));
  // };

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
          Index={this.state.data}
          addUserPrice={this.addUserPrice}
        />
      </div>
    );
  }
}

export default App;

