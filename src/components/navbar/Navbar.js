import React from "react";

import { connect } from "react-redux";
import InstrumentNavLink from "./InstrumentNavLink";

import "./navbar.css";

const Navbar = (props) => {
  return (
    <section className="nav-section">
      <nav className="navbar fixed-top navbar-expand-lg pb-3 pt-3">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="../musication/">
            <img src="images/white_logo_small.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            data-target=".navbar-collapse"
            data-toggle="collapse"
          >
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <a href="../" className="nav-link">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="../about" className="nav-link">
                  About
                </a>
              </li>

              <InstrumentNavLink props={props} />

              <li className="nav-item">
                <a href="../quiz" className="nav-link">
                  Quiz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    instruments: state.instrument.instruments,
  };
};

export default connect(mapStateToProps)(Navbar);
