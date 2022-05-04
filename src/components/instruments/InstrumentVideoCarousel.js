import React from "react";

const InstrumentVideoCarousel = ({ videos }) => {
  const firstVideo = videos[0];
  videos.shift(); // remove first object

  if (videos) {
    return (
      <div
        id="videoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <iframe src={firstVideo.url} title={firstVideo.url}></iframe>
            <div className="carousel-caption d-block">
              <h5>{firstVideo.piece}</h5>
              <p>{firstVideo.performer}</p>
            </div>
          </div>
          {videos &&
            videos.map((video) => {
              return (
                <div className="carousel-item" key={video.url}>
                  <iframe src={video.url} title={video.url}></iframe>
                  <div className="carousel-caption d-block">
                    <h5>{video.piece}</h5>
                    <p>{video.performer}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
};

export default InstrumentVideoCarousel;
