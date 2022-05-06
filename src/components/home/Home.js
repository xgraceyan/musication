import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import { connect } from "react-redux";

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "youtube-background";

import InstrumentCard from "../instruments/InstrumentCard";
import VideoHeader from "../video-header/VideoHeader";

var jsonQuery = require("json-query");

class Home extends Component {
  render() {
    // check if props arrays exist
    if (
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
              <h1 className="section-header text-center">Instruments</h1>
              {/* !====== woodwinds ======== */}
              <div className="card-section woodwinds-section">
                <h3 className="header-2">Woodwinds</h3>
                <div className="small-spacer"></div>
                <InstrumentCard
                  instruments={
                    jsonQuery("instruments[*type=woodwind]", {
                      data: this.props,
                    }).value
                  }
                />
              </div>
              {/* !====== brass ======== */}
              <div className="card-section brass-section">
                <h3 className="header-2">Brass</h3>
                <div className="small-spacer"></div>
                <InstrumentCard
                  instruments={
                    jsonQuery("instruments[*type=brass]", {
                      data: this.props,
                    }).value
                  }
                />
              </div>
              {/* !====== strings ======== */}
              <div className="card-section brass-section">
                <h3 className="header-2">Strings</h3>
                <div className="small-spacer"></div>
                <InstrumentCard
                  instruments={
                    jsonQuery("instruments[*type=string]", {
                      data: this.props,
                    }).value
                  }
                />
              </div>
            </div>
          </section>
          <section className="bg-image-alt-2" id="home-quiz">
            <div className="container section-container title-container">
              <h1 className="section-header text-center">
                Test Your Knowledge
              </h1>
              <hr className="yellow-line mx-auto" />
              <p className="text-center fs-2">
                <a href="../musication/quiz" className="link">
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
