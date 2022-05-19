import React from "react";

function Contact() {
  return (
    <div id="contact-page">
      <section id="contact-title-section" className="bg-image bg-image-contact">
        <div className="container section-container title-container">
          <h1
            className="section-header text-center"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Contact
          </h1>
        </div>
      </section>
      <section id="contact-form-section" className="bg-light-gray">
        <div className="container title-container" id="contact-form-container">
          <h2 className="section-header-alt text-center">Contact Form</h2>
          <form id="contact-form" className="text-white">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <label for="nameInput" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <label for="emailInput" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="contentInput" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="contentInput"
                rows="6"
                placeholder="Content"
              ></textarea>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto" id="formButton">
              <button type="submit" className="btn btn-primary btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <section id="contact-info-section" className="bg-dark-gray">
        <div className="container page-section-container">
          <h2 className="section-header-alt text-center">
            Contact Information
          </h2>
          <p className="text-white text-center" id="contact-info-text">
            Email -{" "}
            <a href="mailto:musication_fake_email@gmail.com" className="link">
              musication@gmail.com
            </a>
            <br />
            <br />
            Phone Number -{" "}
            <a href="tel:1234567890" className="link">
              (123)-456-7890
            </a>
            <br />
            <br />
            Instagram -{" "}
            <a
              href="https://instagram.com/musication_fake_account"
              className="link"
            >
              @Musication
            </a>
            <br />
            <br />
            Twitter -{" "}
            <a
              href="https://twitter.com/@musication_fake_account"
              className="link"
            >
              @Musication_twitter
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
