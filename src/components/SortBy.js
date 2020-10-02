import React from "react";

const SortBy = () => {
  return (
    <div>
      <form className="sortBy" action="/action_page.php">
        <label>
          Priority
          <input
            type="radio"
            id="sortByPriority"
            name="sortByPriority"
            value="sortByPriority"
          />
        </label>
        <label>
          Avg. Price
          <input
            type="radio"
            id="sortByAvgPrice"
            name="sortByAvgPrice"
            value="sortByAvgPrice"
          />
        </label>
        <label>
          Newly Added
          <input
            type="radio"
            id="sortByNewlyAdded"
            name="sortByNewlyAdded"
            value="sortByNewlyAdded"
          />
        </label>
        <label>
          Alphabetical
          <input
            type="radio"
            id="sortByAlphabetical"
            name="sortByAlphabetical"
            value="sortByAlphabetical"
          />
        </label>
      </form>
    </div>
  );
};

export default SortBy;
