import * as React from "react";
import ProductCard from "../Product Card/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid(props) {
  return (
    <div className="prod-grid">
      {props.props?.map((prod, i) => {
        return <ProductCard props={prod} key={i} />;
      })}
    </div>
  );
}
