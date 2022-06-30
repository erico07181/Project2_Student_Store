import * as React from "react";
import ProductCard from "../Product Card/ProductCard";
import "./ProductGrid.css";
import { useState } from "react";
import { useEffect } from "react";
import { useMountEffect } from "react";

export default function ProductGrid({
  shoppingCart,
  products,
  handleAddItem,
  handleRemoveItem,
}) {
  const [filtData, setFiltData] = useState([]);

  const handleFilter = (evt) => {
    const query = evt.target.value;
    const newFilt = products.filter((value) => {
      return value.name.toLowerCase().includes(query.toLowerCase());
    });
    setFiltData(newFilt);
  };

  if (filtData.length == 0) {
    return (
      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleFilter}
          ></input>

          <i className="material-icons">search</i>
        </div>
        <div className="prod-grid">
          {products?.map((prod) => {
            return (
              <ProductCard
                key={prod.id}
                products={prod}
                handleAddItemToCart={handleAddItem}
                handleRemoveItemFromCart={handleRemoveItem}
                shoppingCart={shoppingCart}
              />
            );
          })}
        </div>
      </div>
    );
  } else if (filtData.length > 0) {
    return (
      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleFilter}
          ></input>
          <i className="material-icons">search</i>
        </div>
        <div className="prod-grid">
          {filtData.map((prod, i) => {
            return (
              <ProductCard
                key={prod.id}
                products={prod}
                handleAddItemToCart={handleAddItem}
                handleRemoveItemFromCart={handleRemoveItem}
                shoppingCart={shoppingCart}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
