import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ProductGrid from "../Product Grid/ProductGrid";

export default function Home(props) {
  return (
    <div className="home">
      <div id="Buy" className="product-grid">
        <div className="content">
          <h1>Best Selling Products!</h1>
          <ProductGrid
            props={props.product}
            increaseAmountAt={props.increaseAmountAt}
            decreaseAmountAt={props.decreaseAmountAt}
          />
        </div>
      </div>
    </div>
  );
}
