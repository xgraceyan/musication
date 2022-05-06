import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Instrument from "./components/instruments/Instrument";
import About from "./components/about/About";
import Quiz from "./components/quiz/Quiz";
import Navbar from "./components/navbar/Navbar";
import Error from "./components/error/Error";

import $ from "jquery";

import { Scrollbar } from "smooth-scrollbar-react";

function App() {
  // change app height on window resize
  window.addEventListener("resize", function() {
    $("#app").css("height", window.innerHeight + "px");
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Scrollbar>
        <div className="App" style={{ height: window.innerHeight }} id="app">
          <Routes>
            <Route
              path="/musication/instrument/:instrumentName"
              element={<Instrument />}
            />
            <Route path="/musication/about" element={<About />} />
            <Route path="/musication/quiz" element={<Quiz />} />
            <Route exact path="/musication/" element={<Home />} />
            {/* error page if path doesn't exist */}
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Scrollbar>
    </BrowserRouter>
  );
}

export default App;
