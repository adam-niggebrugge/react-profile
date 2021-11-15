import 'materialize-css/dist/css/materialize.min.css';
import './navbar.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import logo from '../images/nai_logo192x192.png'


const NavBar = () => {

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
              <a className="btn btn-cust" href="#home">
                <h6>Top</h6>
              </a>
          </li>
          <li className="cust-up-margin">
              <a className="btn btn-cust modal-trigger" href="/personal">
                <h6>Personal</h6>
              </a>
          </li>
          <li className="cust-up-margin">
            <a className="btn btn-cust" href="/">
              <h6>Portfolio</h6>
            </a>
          </li>
          <li className="cust-up-margin">
            <a className="btn btn-cust sidenav-close" target="_blank" href="/images/niggebrugge_resume.pdf">
                <h6>Resume</h6>
              </a>
          </li>
        </ul>

      </div>
    </nav>
    <ul id="nav-mobile" className="sidenav cust-sidenav banner">
          <li>
              <a className="btn sidenav-close btn-cust" href="#home">Top</a>
          </li>
          <li>
              <a  className="btn sidenav-close btn-cust" href="/personal">About</a>
          </li>
          <li>
              <a className="btn sidenav-close btn-cust" href="/">Portfolio</a>
          </li>
          <li>
              <a className="btn btn-cust sidenav-close" target="_blank" href="/images/niggebrugge_resume.pdf">Resume</a>
          </li>
        </ul>
  </div>
    );
}

export default NavBar;   