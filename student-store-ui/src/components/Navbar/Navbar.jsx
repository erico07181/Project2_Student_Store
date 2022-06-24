import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import Buy from "../Buy/Buy";
import About from "../About/About";
import Home from "../Home/Home";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="links">
        {/* <Home link={props.links[0]} name={props.names[0]} />
        <About link={props.links[1]} name={props.names[1]} />
        <Contact link={props.links[2]} name={props.names[2]} />
        <Buy link={props.links[3]} name={props.names[3]} /> */}
      </ul>
    </nav>
  );
}
