import React, { Fragment } from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
=======
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
>>>>>>> feat(authsignup):  user should be able to signup
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import BaseRoute from "<Components>/BaseRoute";

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <BaseRoute />
    </Router>
=======
    <Provider store={store}>
      <Router>
        <Fragment>
          <BaseRoute />
          <ToastContainer autoClose={2500} />
        </Fragment>
      </Router>
    </Provider>
>>>>>>> feat(authsignup):  user should be able to signup
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
