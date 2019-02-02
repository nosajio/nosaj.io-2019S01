import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import t from "./styled/theme";

declare global {
  interface Window {
    ms: any;
  }
}

window.ms = t.ms;

ReactDOM.render(<App />, document.getElementById("root"));
