import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import logo from '../images/nai_logo192x192.png'
import './styles/NavTabs.css';
import { Link } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  let sidenav = document.querySelector('#nav-mobile');
  M.Sidenav.init(sidenav, {});

  return (
    <div id="home" className="flip-banner-red">
      <nav  id="navbar"  className="navbar banner-purple" role="navigation">
        <div className="cust-center">
          <img alt="logo" className="cust-logo" src={logo}/>
        </div>
        <a href="#home" data-target="nav-mobile" className="sidenav-trigger">
          <i  className="material-icons">menu</i>
        </a>
      <div className="nav-wrapper container">

    <ul className="banner-red hide-on-med-and-down">
      <li className="cust-up-margin">
        <Link
          to="/"
          className={'btn btn-cust'}
        >Home
        </Link>
      </li>
      <li className="cust-up-margin">
        <Link
          to="/about"
          className={'btn btn-cust'}
        >About
        </Link>
      </li>
      <li className="cust-up-margin">
        <Link
          to="/Projects"
          className={'btn btn-cust'}
        >Projects
        </Link>
      </li>
      <li className="cust-up-margin">
        <Link
          to="/contact"
          className={'btn btn-cust'}
        >Contact
        </Link>
      </li>
    </ul>
    </div>
    </nav>
    <ul id="nav-mobile" className="sidenav cust-sidenav banner">
          <li>
            <Link
              to="/"
              className={'btn sidenav-close btn-cust'}
            >Home</Link>
          </li>
          <li>
            <Link
              to="/about"
              className={'btn sidenav-close btn-cust'}
              >About</Link>
          </li>
          <li>
              <Link
                to="/Projects"
                className={'btn sidenav-close btn-cust'}
                >Projects</Link>
          </li>
          <li>
              <Link
                to="/contact"
                className={'btn sidenav-close btn-cust'}
                >Contact</Link>
          </li>
        </ul>
  </div>
  );
}

export default NavTabs;
