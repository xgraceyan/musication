import React from "react";
import "youtube-background";

const VideoHeader = ({ videos }) => {
  // select random video to play
  function selectVideo() {
    let videosCount = Object.keys(videos).length;
    const randomNum = Math.floor(Math.random() * videosCount);

    if (randomNum === -1) {
      selectVideo(); // if video does not exist, select another one
    } else return randomNum;
  }

  const video = videos[selectVideo()];

  if (video !== undefined) {
    return (
      <div className="video-header">
        <div
          className="youtube-video"
          data-vbg={video.url}
          data-vbg-fit-box={true}
          data-vbg-mute-button={true}
          data-ytbg-mobile={true}
        ></div>
        <div className="container section-container title-container mx-auto text-center content">
          <img
            src="images/musication_logo_white.png"
            alt=""
            className="img-fluid img-center"
          />
          <p className="large-text text-white">
            Discover the various instruments that make music we hear all around
            us in our everyday lives, with an emphasis on classical music.
          </p>
          <div className="spacer"></div>
          <p className="text-white">
            {video.piece} - {video.composer} <br />
            {video.performer} <br />
            {video.url} <br /> <br />
          </p>
        </div>
      </div>
    );
  }
};

export default VideoHeader;
