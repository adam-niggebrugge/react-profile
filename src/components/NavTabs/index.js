import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import logo from "../../images/nai_logo192x192.png"
import "./NavTabs.css";
import { Link } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  let sidenav = document.querySelector("#nav-mobile");
  M.Sidenav.init(sidenav, {});

  return (
    <>
      <nav  id="navbar"  className="custNav" role="navigation">
        <div className="cust-center">
          <img alt="logo" className="cust-logo hide-on-med-and-down" src={logo}/>
        </div>
        <a href="#home" data-target="nav-mobile" className="sidenav-trigger">
          <i  className="material-icons cust-button">menu</i>
        </a>
      <div className="nav-wrapper container">

    <ul className="right hide-on-med-and-down">
      <li className="float-up">
        <Link
          to="/"
          className={"btn-small waves-light cust-button"}
        >Home
        </Link>
      </li>
      <li className="float-up">
        <Link
          to="/about"
          className={"btn-small waves-light cust-button"}
        >About
        </Link>
      </li>
      <li className="float-up">
        <Link
          to="/projects"
          className={"btn-small waves-light cust-button"}
        >Projects
        </Link>
      </li>
      <li className="float-up">
        <Link
          to="/contact"
          className={"btn-small waves-light cust-button"}
        >Contact
        </Link>
      </li>
    </ul>
    </div>
    </nav>
    <ul id="nav-mobile" className="sidenav cust-sidenav banner">
        <img alt="logo" src={logo}/>
          <li>
            <Link
              to="/"
              className={"btn-large waves-light sidenav-close cust-button"}
            >Home</Link>
          </li>
          <li>
            <Link
              to="/about"
              className={"btn-large waves-light sidenav-close cust-button"}
              >About</Link>
          </li>
          <li>
              <Link
                to="/projects"
                className={"btn-large waves-light sidenav-close cust-button"}
                >Projects</Link>
          </li>
          <li>
              <Link
                to="/contact"
                className={"btn-large waves-light sidenav-close cust-button"}
                >Contact</Link>
          </li>
        </ul>
    </>
  );
}

export default NavTabs;
