import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./StateProvider";
import CartReducer, { initialState } from "./reducers/CartReducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={CartReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
