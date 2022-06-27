import * as React from "react";
import { Link } from "react-router-dom";
import ProductGrid from "../Product Grid/ProductGrid";
import "./Buy.css";

export default function Buy(props) {
  return (
    <div className="buy">
      <ProductGrid
        props={props.product}
        increaseAmountAt={props.increaseAmountAt}
        decreaseAmountAt={props.decreaseAmountAt}
      />
    </div>
  );
}
