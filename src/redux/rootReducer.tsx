import { combineReducers } from "redux";
import { createItemReducer } from "./reducers/createitemReducer";
import { generalReducer } from "./reducers/generalReducer";

const MasterReducer = combineReducers({
  general: generalReducer,
  newItem: createItemReducer,
});

export default MasterReducer;
