import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import BaseRoute from "./components/BaseRoute";

const App = () => {
  return (
    <Router>
      <BaseRoute />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
