import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { createStore, applyMiddleware } from "redux";
import RootReducer from "./store/reducers/RootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Scrollbar from "smooth-scrollbar";
import AnchorPlugin from "./components/scrollbar/AnchorPlugin";

// AnchorPlugin - hash scroll fix for scrollbar
Scrollbar.use(AnchorPlugin);

// create redux store using thunk
const store = createStore(RootReducer, applyMiddleware(thunk));

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
