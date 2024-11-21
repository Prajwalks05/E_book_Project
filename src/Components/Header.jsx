import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <header id="header">
      <section className="m-2"></section>
      <nav
        id="primary-header"
        className="navbar navbar-expand-lg py-3"
        style={{ backgroundImage: 'url(./images/Delicate.jpg)' }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src="/images/logo.png"
              height="600px"
              alt="Logo"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Index">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Search">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => window.location.href = '/Login'}>
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => window.location.href = '/Signout'}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}



export default Header


