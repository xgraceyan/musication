import InstrumentReducer from "../reducers/InstrumentReducer";
import VideoReducer from "./VideoReducer";

import { combineReducers } from "redux";

const RootReducer = combineReducers({
  instrument: InstrumentReducer,
  video: VideoReducer,
});

export default RootReducer;
