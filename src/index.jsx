import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import BaseRoute from "<Components>/BaseRoute";
import "semantic-ui-css/semantic.min.css";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <BaseRoute />
          <ToastContainer autoClose={2500} />
        </Fragment>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
