import React, { Component } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Instrument from "./components/instruments/Instrument";
import About from "./components/about/About";
import Quiz from "./components/quiz/Quiz";
import Contact from "./components/contact/Contact";

import Navbar from "./components/navbar/Navbar";
import Error from "./components/error/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="App" id="app">
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
