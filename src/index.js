import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { PROD } from "./util/base";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import MasterReducer from "./redux/rootReducer";

const composeEnhancer =
  (PROD !== "production" && typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(MasterReducer, composeEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
