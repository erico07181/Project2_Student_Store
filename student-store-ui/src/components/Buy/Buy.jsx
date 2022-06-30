import * as React from "react";
import { Link } from "react-router-dom";
import ProductGrid from "../Product Grid/ProductGrid";
import "./Buy.css";

export default function Buy({
  products,
  handleAddItem,
  handleRemoveItem,
  shoppingCart,
}) {
  return (
    <div className="buy">
      <ProductGrid
        products={products}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
