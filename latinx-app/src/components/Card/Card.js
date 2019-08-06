import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container zoom">
      <img alt={props.name} src={props.image} /> <p className="name-heading">{props.name}</p>
    </div>
  </div>
);

export default Card;
