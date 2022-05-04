import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import InstrumentNavLink from "./InstrumentNavLink";

import "./navbar.css";

const Navbar = (props) => {
  return (
    <section className="nav-section">
      <nav className="navbar fixed-top navbar-expand-lg pb-3 pt-3">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="../">
            <img src="../images/white_logo_small.png" alt="" />
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <a href="../" className="nav-link">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="../#instruments" className="nav-link">
                  About
                </a>
              </li>

              <InstrumentNavLink props={props} />

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/instruments"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ensembles
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Woodwinds
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Brass
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      See all
                    </a>
                  </li>
                </ul>
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
    videos: state.video.videos,
  };
};

export default connect(mapStateToProps)(Navbar);
