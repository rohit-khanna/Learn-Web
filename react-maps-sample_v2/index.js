import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./src/components/App";
import ConfigureStore from "./src/redux/configureStore";
import InitialState from "./src/redux/reducers/InitialState";
import { Provider as ReduxProvider } from "react-redux";

const store = new ConfigureStore(InitialState);

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("app")
);
