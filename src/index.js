import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";
import Controller from "./screens/Controller";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <Controller />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
