import React from 'react';
import '../App.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="cardPic">
                <img className="recordPic" src={props.imgURL} alt="" />
            </div>

            <div className="cardText">
                <p className="title">{props.name}</p>
                <p>Format: {props.format}</p>
            </div>
        </div>
    )
}


export default Card;