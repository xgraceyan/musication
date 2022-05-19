import React, { Component } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Instrument from "./components/instruments/Instrument";
import About from "./components/about/About";
import Quiz from "./components/quiz/Quiz";
import Contact from "./components/contact/Contact";

import Navbar from "./components/navbar/Navbar";
import Error from "./components/error/Error";

import rolly from "rolly.js";

class App extends Component {
  // initialize smooth scrolling after app is rendered
  componentDidMount() {
    const smoothScroll = rolly({
      view: document.querySelector(".App"),
      native: true,
      autoUpdate: true,
    });
    smoothScroll.init();

    // if there is hash in url, scroll to element w/ that id
    if (window.location.hash) {
      var hash = window.location.hash.substring(1); // remove "#" from hash string
      smoothScroll.scrollTo(document.getElementById(hash), {
        position: "start",
        offset: 400,
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="App" id="app">
          <section data-scene id="root-section">
            <Routes>
              <Route
                path="/instrument/:instrumentName"
                element={<Instrument />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/contact" element={<Contact />} />
              <Route exact path="/" element={<Home />} />
              {/* error page if path doesn't exist */}
              <Route path="*" element={<Error />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
