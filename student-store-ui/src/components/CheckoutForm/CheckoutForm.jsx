import React from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({
  checkoutForm,
  handleCheckoutFormChange,
  handleSubmitCheckoutForm,
  shoppingCart,
}) => {
  console.log(checkoutForm.name);
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <input
        name="email"
        value={checkoutForm.email}
        type="email"
        placeholder="student@codepath.org"
        onChange={(e) => {
          handleCheckoutFormChange(checkoutForm.name, e.target.value);
        }}
      />
      <input
        name="name"
        value={checkoutForm.name}
        type="text"
        placeholder="Student Name"
        onChange={(e) => {
          handleCheckoutFormChange(e.target.value, checkoutForm.email);
        }}
      />
      <button
        onClick={() => handleSubmitCheckoutForm(checkoutForm, shoppingCart)}
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutForm;
