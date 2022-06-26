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
import Hero from "../Hero/Hero";
import Subnav from "../Subnav/Subnav";
import ProductGrid from "../Product Grid/ProductGrid";

const api = axios.create({
  url: `https://codepath-store-api.herokuapp.com/store`,
});

export default function App() {
  let links = ["/", "/about", "/contact", "/buy"];
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store`).then((res) => {
      setProduct(res.data.products);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar links={links} />
          <Hero />
          <Subnav data={product} />

          <Routes>
            <Route path="/" element={<Home product={product} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="buy" element={<Buy />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
