import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Buy from "../Buy/Buy";
import Home from "../Home/Home";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Hero from "../Hero/Hero";
import Subnav from "../Subnav/Subnav";

const url = `http://localhost:3001/store`;

export default function App() {
  let links = ["/", "/about", "/contact", "/buy"];
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCartPrice, setShoppingCartPrice] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState({
    name: "",
    email: "",
    shoppingCart: shoppingCart,
  });
  const [receipt, setReceipt] = useState(null);

  //Error handling
  // useEffect(() => {
  //   console.log(product);
  // }, [product]);
  console.log(shoppingCart);

  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  const handleCheckoutFormChange = (name, email, shoppingCart) => {
    setCheckoutForm({ name, email, shoppingCart });
  };

  const handleSubmitCheckoutForm = async (checkoutForm, shoppingCart) => {
    console.log(shoppingCart);
    try {
      console.log("here");
      const res = await axios.post(`${url}`, {
        checkoutForm: {
          name: checkoutForm.name,
          email: checkoutForm.email,
          shoppingCart: shoppingCart,
        },
      });
      console.log(res);
      if (res.status != 201) {
        console.log("error");
      }

      //setReceipt(res.data.purchase.receipt);
      // setShoppingCart([]);
      // setShoppingCartPrice(0);
      // setCheckoutForm({ name: "", email: "" });
    } catch (err) {
      console.log("API dead", err);
    }
  };

  const formatShoppingCart = () => {
    return shoppingCart.map((i) => {
      return {
        itemId: i.productId,
        quantity: i.quantity,
      };
    });
  };

  useEffect(async () => {
    try {
      const response = await axios.get(`${url}`);
      console.log(response.data.products);
      setProduct(response.data.products);
    } catch (e) {
      console.log("API call error", e);
    }
  }, []);

  const handleAddItem = (productId, price, name) => {
    setShoppingCartPrice(shoppingCartPrice + price);
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].productId === productId) {
        shoppingCart[i].quantity++;
        setShoppingCart([...shoppingCart]);
        return;
      }
    }
    setShoppingCart([...shoppingCart, { productId, quantity: 1, price, name }]);
  };

  const handleRemoveItem = (productId, price) => {
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].productId === productId) {
        if (shoppingCart[i].quantity === 1) {
          shoppingCart.splice(i, 1);
        } else {
          shoppingCart[i].quantity--;
        }
        setShoppingCartPrice(shoppingCartPrice - price);
        setShoppingCart([...shoppingCart]);
        return;
      }
    }
  };

  return (
    <div className="app">
      <main>
        <BrowserRouter>
          <Navbar links={links} />
          <Hero />
          <Sidebar
            checkoutForm={checkoutForm}
            handleOnToggle={handleOnToggle}
            isOpen={isOpen}
            products={product}
            setIsOpen={setIsOpen}
            shoppingCart={shoppingCart}
            handleCheckoutFormChange={handleCheckoutFormChange}
            handleSubmitCheckoutForm={handleSubmitCheckoutForm}
            receipt={receipt}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={product}
                  handleAddItem={handleAddItem}
                  handleRemoveItem={handleRemoveItem}
                  shoppingCart={shoppingCart}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
