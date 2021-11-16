import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import logo from './images/nai_logo192x192.png'
import './styles/NavTabs.css';

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
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active btn btn-cust' : 'nav-link btn btn-cust'}
        >
          Home
        </a>
      </li>
      <li className="cust-up-margin">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active btn btn-cust' : 'nav-link btn btn-cust'}
        >
          About
        </a>
      </li>
      <li className="cust-up-margin">
        <a
          href="#Projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active btn btn-cust' : 'nav-link btn btn-cust'}
        >
          Projects
        </a>
      </li>
      <li className="cust-up-margin">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active btn btn-cust' : 'nav-link btn btn-cust'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
    </nav>
    <ul id="nav-mobile" className="sidenav cust-sidenav banner">
          <li>
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Home' ? 'nav-link active btn sidenav-close btn-cust' : 'nav-link btn sidenav-close btn-cust'}
            >Home</a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active btn sidenav-close btn-cust' : 'nav-link btn sidenav-close btn-cust'}
            >About</a>
          </li>
          <li>
              <a
                href="#Projects"
                onClick={() => handlePageChange('Projects')}
                // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Projects' ? 'nav-link active btn btn-cust' : 'nav-link btn btn-cust'}
              >Projects</a>
          </li>
          <li>
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                 // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link active btn btn-cust' : 'nav-link btn btn-cust'}
              >Contact</a>
          </li>
        </ul>
  </div>
  );
}

export default NavTabs;
