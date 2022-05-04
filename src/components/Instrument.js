import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import InstrumentImageCarousel from "./instruments/InstrumentImageCarousel";
import InstrumentVideoCarousel from "./instruments/InstrumentVideoCarousel";

import Error from "./Error";

import "../components/instruments/instrument.css";

var jsonQuery = require("json-query");

function Instrument(props) {
  let instrument = props.instrument;

  // check if instrument props has loaded
  if (instrument) {
    return (
      <main id="main-scrollbar">
        <div className="bg-light-gray scroll-content" id="instrument-page">
          <section id="instrument-intro-section">
            <div className="container section-container">
              <div className="row intro-row">
                <div className="col-lg-3 col-md-4 col-5 instrument-cover-img">
                  <img src={instrument.coverImage} alt="" />
                </div>
                <div className="col-lg-9 col-md-8 col-7 row-text-col">
                  <div className="spacer-small"></div>

                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="../">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="../#instruments">Instruments</a>
                      </li>
                    </ol>
                  </nav>

                  <h1 className="row-section-header">{instrument.name}</h1>
                  <p className="header-3">({instrument.longName})</p>
                </div>
              </div>
            </div>
          </section>

          <section id="instrument-about-section">
            <div className="container page-section-container">
              <h1 className="section-header mb-0">About</h1>
              <hr className="yellow-line" />
              <div className="row">
                <div className="col-lg-6">
                  <p className="text-white">
                    {instrument.description + "\n\nRead more here: "}
                    <a
                      href={instrument.links[0]}
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {instrument.links[0]}
                    </a>
                  </p>
                </div>

                <div className="col-lg-6 img-col">
                  <InstrumentImageCarousel images={instrument.images} />
                </div>
              </div>
            </div>
          </section>

          <section id="instrument-videos-section" className="bg-dark-gray">
            <div className="container page-section-container">
              <h1 className="section-header text-center">
                Pieces & Performances
              </h1>
              <InstrumentVideoCarousel videos={instrument.videos} />
            </div>
          </section>
        </div>
      </main>
    );
  } else {
    return (
      // instrument does not exist - 404 page
      <Error />
    );
  }
}

const mapStateToProps = (state) => {
  // search for queried instrument
  let instrumentsList = state.instrument;
  let { instrumentName } = useParams();
  let query = "instruments[id=" + instrumentName + "]";
  let instrumentResult = jsonQuery(query, {
    data: instrumentsList,
  });

  return {
    instrument: instrumentResult.value,
  };
};

export default connect(mapStateToProps)(Instrument);
