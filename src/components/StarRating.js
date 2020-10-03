import React, { Component } from "react";
import Ratings from "react-ratings-declarative";

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.changeRating = this.changeRating.bind(this);
    this.state = {
      rating: props.rating,
    };
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });
  }

  render() {
    return (
      <Ratings
        rating={this.state.rating}
        widgetRatedColors="yellow"
        widgetDimensions="20px"
        widgetSpacings="1px"
        changeRating={this.changeRating}
      >
        <Ratings.Widget widgetHoverColor="yellow" />
        <Ratings.Widget widgetHoverColor="yellow" />
        <Ratings.Widget widgetHoverColor="yellow" />
        <Ratings.Widget widgetHoverColor="yellow" />
        <Ratings.Widget widgetHoverColor="yellow" />
      </Ratings>
    );
  }
}

export default StarRating;
