import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";
import Controller from "./screens/Controller";
import store from "./store/index";


import "./index.css";
import "./common/common.css";

ReactDOM.render(
  <Provider store={store}>
    <Controller />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
