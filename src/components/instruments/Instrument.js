import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import InstrumentImageCarousel from "./InstrumentImageCarousel";
import InstrumentVideoCarousel from "./InstrumentVideoCarousel";

import Error from "../error/Error";

import "./instrument.css";

var jsonQuery = require("json-query");

function Instrument(props) {
  let instrument = props.instrument;

  // check if instrument props has loaded
  if (instrument) {
    return (
      <div className="bg-light-gray" id="instrument-page">
        <section id="instrument-intro-section">
          <div className="container section-container">
            <div className="row intro-row">
              <div
                className="col-lg-3 col-md-4 col-5 instrument-cover-img"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <img src={instrument.coverImage} alt="" />
              </div>
              <div
                className="col-lg-9 col-md-8 col-7 row-text-col"
                data-aos="fade-down"
                data-aos-delay="400"
              >
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

        <section
          id="instrument-about-section"
          data-aos="fade-up"
          data-aos-delay="500"
        >
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
          <div
            className="container page-section-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="section-header text-center">Video Clips</h1>
            <InstrumentVideoCarousel videos={instrument.videos} />
          </div>
        </section>
      </div>
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
