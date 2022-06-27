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
import { useState } from "react";
import { useEffect } from "react";
import Hero from "../Hero/Hero";
import Subnav from "../Subnav/Subnav";

const api = axios.create({
  url: `https://codepath-store-api.herokuapp.com/store`,
});

export default function App() {
  let links = ["/", "/about", "/contact", "/buy"];
  const [product, setProduct] = useState();
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store`).then((res) => {
      setProduct(res.data.products);
    });
  }, []);

  function increaseAmountAt(i) {
    if (product[i].amount > 99) {
      return;
    }
    var prodNew = [...product];
    prodNew[i].amount += 1;
    setProduct(prodNew);
  }

  function decreaseAmountAt(i) {
    if (product[i].amount === 0) {
      return;
    }
    var prodNew = [...product];
    prodNew[i].amount -= 1;
    setProduct(prodNew);
  }

  console.log(product);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Sidebar
            handleOnToggle={handleOnToggle}
            isOpen={isOpen}
            products={product}
            setIsOpen={setIsOpen}
          />
          <Navbar links={links} />
          <Hero />
          <Subnav data={product} />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  product={product}
                  increaseAmountAt={increaseAmountAt}
                  decreaseAmountAt={decreaseAmountAt}
                />
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="buy" element={<Buy />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
