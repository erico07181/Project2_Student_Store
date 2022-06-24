import * as React from "react";
import ProductCard from "../Product Card/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid(props) {
  console.log(props.props);

  return (
    <div className="prod_grid">
      {props.props?.map((prod, i) => {
        return <ProductCard props={prod} key={i} />;
      })}
    </div>
  );
}
