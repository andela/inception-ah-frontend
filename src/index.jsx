import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import "semantic-ui-css/semantic.min.css";
import BaseRoute from "<Components>/BaseRoute";

const App = () => {
  return (
    <Router>
      <BaseRoute />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
