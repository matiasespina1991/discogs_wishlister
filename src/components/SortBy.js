import React, { Component } from "react";

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.filterAlphabetical = this.filterAlphabetical.bind(this);
    this.state = {
      sortAlphabetical: false,
    };
  }

  filterAlphabetical = () => {
    this.setState({ sortAlphabetical: true });
  };

  render() {
    return (
      <div>
        <form className="sortBy" action="/action_page.php">
          {/* <label>
            Priority
            <input
              type="radio"
              id="sortByPriority"
              name="sortByPriority"
              value="sortByPriority"
            />
          </label> */}
          <label>
            Avg. Price
            <input
              type="radio"
              id="sortByAvgPrice"
              name="sortByAvgPrice"
              value="sortByAvgPrice"
            />
          </label>
          {/* <label>
            Newly Added
            <input
              type="radio"
              id="sortByNewlyAdded"
              name="sortByNewlyAdded"
              value="sortByNewlyAdded"
            />
          </label> */}
          <label>
            Alphabetical
            <input
              onClick={this.filterAlphabetical}
              type="radio"
              id="sortByAlphabetical"
              name="sortByAlphabetical"
              value="sortByAlphabetical"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SortBy;
