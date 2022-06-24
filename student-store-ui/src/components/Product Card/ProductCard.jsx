import * as React from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  console.log(props.props);

  return (
    <div className="media">
      <img className="prod-img" src={props.props.image} />
    </div>
  );
}
