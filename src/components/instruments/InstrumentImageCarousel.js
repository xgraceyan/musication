import React from "react";

const InstrumentImageCarousel = ({ images }) => {
  // extract the first element of image array
  // to be used for active carousel-item
  const firstImage = images[0];
  images.shift();

  return (
    <div
      id="imageCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={firstImage}
            className="d-block w-100"
            alt="..."
            data-toggle="tooltip"
            data-bs-html="true"
            title={
              '<div className="small-text"> <strong>Credit:</strong> ' +
              firstImage +
              "</div>"
            }
          />
        </div>
        {images &&
          images.map((image) => {
            return (
              <div className="carousel-item" key={image}>
                <img
                  src={image}
                  className="d-block w-100"
                  alt="Instrument"
                  data-toggle="tooltip"
                  data-bs-html="true"
                  data-delay='{"show":"5000", "hide":"3000"}'
                  title={
                    '<div className="small-text"> <strong>Credit:</strong> ' +
                    image +
                    "</div>"
                  }
                />
              </div>
            );
          })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default InstrumentImageCarousel;
