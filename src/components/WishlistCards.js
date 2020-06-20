import React from 'react';
import "../App.css";
import SortBy from './SortBy';
import Card from './Card';


const WishlistCards = (props) => {
    return (
        <div className="wishlistCards">
            <div className="sortBy-container">
                <SortBy />
            </div>
            {props.Index.map(indexOfRecords => <Card {...indexOfRecords} key={indexOfRecords.id} />)}
        </div>
    )
}

export default WishlistCards;