import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Buy from "../Buy/Buy";
import Home from "../Home/Home";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { NavLink } from "react-router-dom";

const api = axios.create({
  url: `https://codepath-store-api.herokuapp.com/store`,
});

export default function App() {
  let links = ["/", "about", "contact", "buy"];
  let names = ["home", "about", "contact", "buy"];
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store`).then((res) => {
      setProduct(res.data.products);
      console.log(res.data.products);
    });
  }, []);
  console.log(product);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="buy" element={<Buy />} />
        </Routes>
        <main>
          <Navbar />
          <Sidebar />
          <Home product={product} />
        </main>
      </BrowserRouter>
    </div>
  );
}
