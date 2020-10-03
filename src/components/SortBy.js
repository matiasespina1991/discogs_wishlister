import React from "react";

const SortBy = (props) => {
  console.log(props);
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
          Filter by Year Ascendant
          <input
            onClick={props.filterYearAscendant}
            type="radio"
            id="sortByYear"
            name="sortBy"
            value="sortByYear"
          />
        </label>
        <label>
          Filter by Year Descendant
          <input
            onClick={props.filterYearDescendant}
            type="radio"
            id="sortByYear"
            name="sortBy"
            value="sortByYear"
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
          Filter Alphabetically
          <input
            onClick={props.filterAlphabetical}
            type="radio"
            id="sortByAlphabetical"
            name="sortBy"
            value="sortByAlphabetical"
          />
        </label>
      </form>
    </div>
  );
};

export default SortBy;
