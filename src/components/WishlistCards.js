import React, { Component } from "react";
import "../App.css";
import SortBy from "./SortBy";
import Card from "./Card";

class WishlistCards extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { addUserPrice, rating, Index } = this.props;

    return (
      <div className="wishlistCards">
        <div className="sortBy-container">
          <SortBy />
        </div>
        {Index.map((indexOfRecords) => (
          <Card
            {...indexOfRecords}
            key={indexOfRecords.id}
            addUserPrice={addUserPrice}
            rating={rating}
          />
        ))}
      </div>
    );
  }
}

export default WishlistCards;
