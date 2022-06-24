import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ProductGrid from "../Product Grid/ProductGrid";

export default function Home(props) {
  console.log(props.product);
  return (
    <div className="home">
      <ProductGrid props={props.product} />
    </div>
  );
}
