import React, { Component } from "react";
import $ from "jquery";

class Contact extends Component {
  state = {
    nameInput: "",
    emailInput: "",
    contentInput: "",
  };

  // make a copy of empty state
  initState = {
    nameInput: "",
    emailInput: "",
    contentInput: "",
  };

  validEmail = (email) => {
    // reg exp from w3resource.com
    if (/^\S+@\S+\.\S+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  closeAlert = (e) => {
    e.preventDefault();
    $("#successAlert") // hide success alert
      .removeClass("shown")
      .addClass("hidden");
  };

  // update state every time input is changed
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.nameInput === "" ||
      this.state.emailInput === "" ||
      this.state.contentInput === "" ||
      !this.validEmail(this.state.emailInput) // check for valid email
    ) {
      $("#errorAlert") // show alert
        .removeClass("hidden")
        .addClass("shown");
    } else {
      $("#successAlert") // show alert
        .removeClass("hidden")
        .addClass("shown");

      // clear form
      $("form")
        .get(0)
        .reset();

      this.setState(this.initState);

      // hide error alert
      if ($("#errorAlert").hasClass("shown")) {
        $("#errorAlert")
          .removeClass("shown")
          .addClass("hidden");
      }
    }
  };

  render() {
    return (
      <div id="contact-page">
        <section
          id="contact-title-section"
          className="bg-image bg-image-contact"
        >
          <div className="container section-container title-container">
            <h1 className="section-header text-center" data-aos="fade-down">
              Contact
            </h1>
          </div>
        </section>
        <section id="contact-form-section" className="bg-light-gray">
          <div
            className="container title-container"
            id="contact-form-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="section-header-alt text-center">Contact Form</h2>
            <div
              className="alert alert-danger alert-dismissible hidden"
              role="alert"
              id="errorAlert"
            >
              Please answer all inputs correctly before submitting.
            </div>
            <div
              className="alert alert-success alert-dismissible hidden"
              role="alert"
              id="successAlert"
            >
              Success! Contact form sent
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={this.closeAlert}
              ></button>
            </div>
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
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
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
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto" id="formButton">
                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
        <section id="contact-info-section" className="bg-dark-gray">
          <div className="container page-section-container" data-aos="fade-up">
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
}

export default Contact;
