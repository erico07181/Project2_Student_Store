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
      <div className="content">
        <div className="logo">
          <a href="/">
            <img
              src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
              alt="codepath logo"
            />
          </a>
        </div>

        <ul className="links">
          <Link to={props.links[0]}>Home</Link>
          <Link to={props.links[1]}>About Us </Link>
          <Link to={props.links[2]}>Contact Us </Link>
          <Link to={props.links[3]}>Buy Now </Link>
        </ul>
      </div>
    </nav>
  );
}
