import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Current Score: <span className="digit">{props.score}</span> Highest Score: <span className="digit">{props.highscore}</span>
    </div>
  </div>
);

export default Header;
