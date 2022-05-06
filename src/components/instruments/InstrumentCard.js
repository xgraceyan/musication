import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const InstrumentCard = ({ instruments }) => {
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
                <a
                  href={"../instrument/" + instrument.id}
                  key={instrument.id}
                  className="card-link"
                >
                  <div
                    className="card card-1"
                    style={{
                      background:
                        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" +
                        instrument.coverImage +
                        "')",
                    }}
                  >
                    <div className="card-body">
                      <h3 className="card-title">{instrument.name}</h3>
                    </div>
                  </div>
                </a>
              );
            })}
        </OwlCarousel>
      </div>
    );
  }
};

export default InstrumentCard;
