import * as React from "react";
import "./Sidebar.css";

import { DoubleArrowOutlined } from "@material-ui/icons";
// import AddCardIcon from "@mui/icons-material/AddCard";
// import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { ShoppingBasket } from "@material-ui/icons";
import ShoppingCart from "../Shopping Cart/ShoppingCart";

export default function Sidebar({
  isOpen = false,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle = () => {},
  setIsOpen,
  cartHasItems,
}) {
  console.log(products);

  if (products == null) {
    return (
      <section className={isOpen ? "sidebar" : "sidebar closed"}>
        <div className="top-butt">
          <button className="toggle-button" onClick={handleOnToggle}>
            <DoubleArrowOutlined
              className={isOpen ? "open" : "closed"}
              style={{
                color: "white",
                height: 40,
                width: 40,
                transition: "0.5s",
              }}
            />
          </button>
          <div className="other">
            <div className="shoppping">
              <h3
                className={
                  isOpen ? "shopping-cart-title" : "shopping-cart-title hidden"
                }
                style={{ color: "white" }}
              >
                Shopping Cart
              </h3>
            </div>
          </div>
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className={isOpen ? "sidebar" : "sidebar closed"}>
        <div className="top-butt">
          <button className="toggle-button" onClick={handleOnToggle}>
            <DoubleArrowOutlined
              className={isOpen ? "open" : "closed"}
              style={{
                color: "white",
                height: 40,
                width: 40,
                transition: "0.5s",
              }}
            />
          </button>
          <div className="other">
            <div className="shoppping">
              <h3
                className={
                  isOpen ? "shopping-cart-title" : "shopping-cart-title hidden"
                }
                style={{ color: "white" }}
              >
                Shopping Cart
              </h3>
            </div>
            <ShoppingCart
              isOpen={isOpen}
              products={products}
              setIsOpen={setIsOpen}
              cartHasItems={cartHasItems}
            />
          </div>
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </div>
        </div>
      </section>
    );
  }
}
