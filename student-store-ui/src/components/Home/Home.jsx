import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ProductGrid from "../Product Grid/ProductGrid";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Buy from "../Buy/Buy";

export default function Home({
  products,
  handleAddItem,
  handleRemoveItem,
  shoppingCart,
}) {
  return (
    <div className="home">
      <div id="Buy" className="product-grid">
        <div className="content">
          <h1>Best Selling Products!</h1>
          <ProductGrid
            shoppingCart={shoppingCart}
            products={products}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
        </div>
      </div>
      <About />
      <Contact />
    </div>
  );
}
