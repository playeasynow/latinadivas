import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container zoom">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;
