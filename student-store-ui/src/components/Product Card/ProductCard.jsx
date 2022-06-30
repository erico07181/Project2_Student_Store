import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({
  key,
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
  setShowDescription,
  shoppingCart,
}) => {
  return (
    <div
      className="product-card"
      style={{
        height: showDescription ? "400px" : "350px",
        width: showDescription ? "500px" : "350px",
      }}
    >
      <div className="image-container">
        <Link to={`/products/${products.id}`}>
          <img className="product-image" src={products.image} />
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <div className="product-name">{products.name}</div>
          <div className="product-price">{products.price}</div>
        </div>
        <div className="actions">
          <div className="buttons">
            <button
              className="add"
              onClick={() => {
                handleAddItemToCart(products.id, products.price, products.name);
              }}
            >
              <i className="material-icons">add</i>
            </button>
            <button
              className="remove"
              onClick={() => {
                handleRemoveItemFromCart(products.id, products.price);
              }}
            >
              <i className="material-icons">remove</i>
            </button>
          </div>

          {shoppingCart?.find((item) => item.productId === products.id) && (
            <span className="added-items">
              {
                shoppingCart.find((item) => item.productId === products.id)
                  .quantity
              }
            </span>
          )}
        </div>
      </div>
      <div className="desc">
        {showDescription && (
          <div className="showDescription">{products.description}</div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
