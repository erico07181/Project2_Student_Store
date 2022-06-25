import * as React from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div className="prod-card">
      <div className="media">
        <a href={"/products/" + props.props.id}>
          <img className="prod-image" src={props.props.image} />
        </a>
      </div>
      <div className="prod-info">
        <div className="main-info">
          <h1 className="prod-name">{props.props.name}</h1>
          <p className="prod-price">{props.props.price}</p>
        </div>
      </div>
    </div>
  );
}
