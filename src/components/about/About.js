import React from "react";

function About() {
  return (
    <div className="bg-light-gray" id="about-page">
      <section id="about-title-section" className="bg-image">
        <div className="container section-container title-container">
          <h1 className="section-header text-center">About</h1>
        </div>
      </section>
      <section id="about-info-section">
        <div className="container section-container">
          <p className="text-white" id="about-text">
            Music is an integral part in many peoples' lives. Most of us hear it
            everyday, from popular songs on the radio to even your phone
            ringtone, but we sometimes forget how that music is created.
            Musication aims to expose people to the various types of instruments
            with an emphasis on classical music, providing a little bit of
            history and information on common instruments while showing how the
            instrument looks and sounds like and the pieces it can play. <br />
            <br />
            Hopefully with this newfound knowledge you will be able to detect
            certain instruments a song or piece you're listening to uses!
          </p>
          <br />
          <hr className="yellow-line" />
          <br />
          <p className="text-white" id="credits-text">
            <strong>Credits:</strong>
            <br />- All pictures were free-to-use and taken from unsplash.com
            and pexels.com
            <br />- Frameworks & packages like Bootstrap were used and are
            listed in the package.json of the{" "}
            <a href="https://github.com/xgraceyan/musication" className="link">
              GitHub Repository
            </a>
            .
            <br />- Wikipedia.com and dkfindout.com were used to research
            information about the instruments.
            <br />
            <br />
            Website made by Grace Yan
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
