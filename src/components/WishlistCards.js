import React, { Component } from "react";
import "../App.css";
import SortBy from "./SortBy";
import Card from "./Card";

class WishlistCards extends Component {
  constructor(props) {
    super(props);
    this.filterAlphabetical = this.filterAlphabetical.bind(this);

    this.state = {
      sortAlphabetical: false,
      sortYearAscendant: false,
      sortYearDescendant: false,
    };
  }

  filterAlphabetical = () => {
    this.setState({ sortAlphabetical: true, sortYear: false });
    this.props.Index.sort((a, b) => a.name.localeCompare(b.name));
  };

  filterYearAscendant = () => {
    this.setState({
      sortAlphabetical: false,
      sortYearDescendant: false,
      sortYearAscendant: true,
    });
    this.props.Index.sort((a, b) => {
      console.log(a, b);
      return b.year - a.year;
    });
  };

  filterYearDescendant = () => {
    this.setState({
      sortAlphabetical: false,
      sortYearDescendant: true,
      sortYearAscendant: false,
    });
    this.props.Index.sort((a, b) => {
      console.log(a, b);
      return a.year - b.year;
    });
  };

  render() {
    const { addUserPrice, rating, Index } = this.props;
    const {
      sortAlphabetical,
      sortYearAscendant,
      sortYearDescendant,
    } = this.state;

    return (
      <div className="wishlistCards">
        <div className="sortBy-container">
          <SortBy
            filterAlphabetical={this.filterAlphabetical}
            sortAlphabetical={sortAlphabetical}
            filterYearAscendant={this.filterYearAscendant}
            sortYearAscendant={sortYearAscendant}
            filterYearDescendant={this.filterYearDescendant}
            sortYearDescendant={sortYearDescendant}
          />
        </div>
        {Index.map((indexOfRecords) => (
          <Card
            {...indexOfRecords}
            key={indexOfRecords.id}
            addUserPrice={addUserPrice}
            rating={rating}
            year={indexOfRecords.year}
          />
        ))}
      </div>
    );
  }
}

export default WishlistCards;
