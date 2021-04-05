import { combineReducers } from "redux";
import gridTypeReducer from "./grid-type/gridType.reducer";

const rootReducer = combineReducers({
  grid: gridTypeReducer,
});

export default rootReducer;
