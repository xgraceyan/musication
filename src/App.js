import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Instrument from "./components/Instrument";
import Navbar from "./components/navbar/Navbar";
import Error from "./components/Error";

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
            <Route path="/" element={<Home />} />
            <Route
              path="/instrument/:instrumentName"
              element={<Instrument />}
            />
            {/* error page if path doesn't exist */}
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Scrollbar>
    </BrowserRouter>
  );
}

export default App;
