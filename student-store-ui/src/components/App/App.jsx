import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Buy from "../Buy/Buy"
import Home from "../Home/Home"
import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom"

import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="buy" element={<Buy/>}/>

      </Routes>
        <main>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/buy">Buy Now</Link>
            </li>
          </ul>
          <Navbar>
          </Navbar>
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
