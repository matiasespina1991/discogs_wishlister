import React from "react";
import "../App.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-pic-and-text-container">
        <div className="cardPic">
          <img className="recordPic" src={props.imgURL} alt="" />
        </div>

        <div className="cardText">
          <p className="title">{props.name}</p>
          <p>Format: {props.format}</p>
        </div>
      </div>

      <div className="priority-value"></div>

      <div className="price-input-container">
        <label>
          <input
            id="price-input"
            className="price-input"
            type="text"
            value={props.userPrice}
            onChange={(ev) => props.addUserPrice(props.id, ev.target.value)}
          />
        </label>
        <div className="euro-symbol">€</div>
      </div>
    </div>
  );
};

export default Card;
