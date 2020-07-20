import React from 'react';

const SortBy = () => {
    return (
        <div>
            <form className="sortBy" action="/action_page.php">
                <input type="radio" id="sortByPriority" name="sortByPriority" value="sortByPriority" />
                <label>Priority</label>
                <input type="radio" id="sortByAvgPrice" name="sortByAvgPrice" value="sortByAvgPrice" />
                <label>Avg. Price</label>
                <input type="radio" id="sortByNewlyAdded" name="sortByNewlyAdded" value="sortByNewlyAdded" />
                <label>Newly Added</label>
                <input type="radio" id="sortByAlphabetical" name="sortByAlphabetical" value="sortByAlphabetical" />
                <label>Alphabetical</label>
            </form>
        </div>
    )
}

export default SortBy;