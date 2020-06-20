import React from 'react';

const SortBy = () => {
    return (
        <div>
            <form className="sortBy" action="/action_page.php">
                <input type="radio" id="sortByPriority" name="sortByPriority" value="sortByPriority" />
                <label for="sortByPriority">Priority</label>
                <input type="radio" id="sortByAvgPrice" name="sortByAvgPrice" value="sortByAvgPrice" />
                <label for="sortByAvgPrice">Avg. Price</label>
                <input type="radio" id="sortByNewlyAdded" name="sortByNewlyAdded" value="sortByNewlyAdded" />
                <label for="sortByNewlyAdded">Newly Added</label>
                <input type="radio" id="sortByAlphabetical" name="sortByAlphabetical" value="sortByAlphabetical" />
                <label for="sortByAlphabetical">Alphabetical</label>
            </form>
        </div>
    )
}

export default SortBy;