import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import { connect } from "react-redux";

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "youtube-background";

import InstrumentCardCarousel from "../instruments/InstrumentCardCarousel";
import VideoHeader from "../video-header/VideoHeader";

var jsonQuery = require("json-query");

class Home extends Component {
  render() {
    if (
      // check if props arrays exist
      this.props.instruments !== undefined &&
      this.props.videos !== undefined
    ) {
      return (
        <div className="bg-light-gray" id="home-scroll">
          <section className="title-section">
            <VideoHeader videos={this.props.videos} />
          </section>

          <section id="instruments">
            <div className="container section-container">
              <h1 className="section-header text-center" data-aos="fade-down">
                Instruments
              </h1>
              <p className="text-white text-center">
                Hover over the cards to hear how the instrument sounds!
              </p>
              {/* !====== woodwinds ======== */}
              <div
                className="card-section"
                id="woodwinds-section"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="header-2">Woodwinds</h3>
                <div className="small-spacer"></div>
                <InstrumentCardCarousel
                  instruments={
                    jsonQuery("instruments[*type=woodwind]", {
                      data: this.props,
                    }).value
                  }
                />
              </div>
              {/* !====== brass ======== */}
              <div
                className="card-section"
                id="brass-section"
                data-aos="fade-up"
              >
                <h3 className="header-2">Brass</h3>
                <div className="small-spacer"></div>
                <InstrumentCardCarousel
                  instruments={
                    jsonQuery("instruments[*type=brass]", {
                      data: this.props,
                    }).value
                  }
                />
              </div>
              {/* !====== strings ======== */}
              <div
                className="card-section"
                id="strings-section"
                data-aos="fade-up"
              >
                <h3 className="header-2">Strings</h3>
                <div className="small-spacer"></div>
                <InstrumentCardCarousel
                  instruments={
                    jsonQuery("instruments[*type=string]", {
                      data: this.props,
                    }).value
                  }
                />
              </div>
            </div>
          </section>
          <section
            className="bg-image bg-image-home"
            id="home-quiz"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className="container section-container title-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-center text-white">
                Think you mastered all the instruments?
              </p>
              <h1 className="section-header text-center">
                Test Your Knowledge
              </h1>

              <hr className="yellow-line mx-auto" />
              <p className="text-center fs-2">
                <a href="../quiz" className="link">
                  Take the Quiz →
                </a>
              </p>
            </div>
          </section>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    instruments: state.instrument.instruments,
    videos: state.video.videos,
  };
};

export default connect(mapStateToProps)(Home);
