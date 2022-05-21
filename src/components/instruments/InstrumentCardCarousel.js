import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";

import InstrumentCard from "./InstrumentCard";

const InstrumentCardCarousel = ({ instruments }) => {
  const audioSrc = require.context("../../", true, /\.wav$/); // import all audio files

  if (instruments) {
    return (
      <div className="instrument-list">
        <OwlCarousel
          items={5}
          className="owl-theme"
          loop={false}
          dots={true}
          merge={true}
          mergeFit={false}
          autoplay={true}
          rewind={true}
          responsive={{
            0: {
              items: 2,
              margin: 20,
            },
            380: {
              items: 3,
              margin: 60,
            },
            760: {
              items: 3,
              margin: 50,
            },
            1000: {
              items: 4,
            },
            1200: {
              items: 5,
            },
          }}
        >
          {/* for each instrument in array */}
          {instruments &&
            instruments.map((instrument) => {
              return (
                <InstrumentCard
                  instrument={instrument}
                  audioSrc={audioSrc("./music/" + instrument.id + ".wav")}
                />
              );
            })}
        </OwlCarousel>
      </div>
    );
  }
};

export default InstrumentCardCarousel;
