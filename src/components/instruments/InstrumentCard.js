import React from "react";

const InstrumentCard = ({ instrument, audioSrc }) => {
  let audio = new Audio(audioSrc); // import audio

  function playMusic() {
    var audioPlayPromise = audio.play();
    if (audioPlayPromise !== undefined) {
      audioPlayPromise
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function stopMusic() {
    audio.pause();
    audio.currentTime = 0; // resets audio
  }

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
        onPointerEnter={() => playMusic()}
        onPointerLeave={() => stopMusic()}
      >
        <div className="card-body">
          <h3 className="card-title">{instrument.name}</h3>
        </div>
      </div>
    </a>
  );
};

export default InstrumentCard;
