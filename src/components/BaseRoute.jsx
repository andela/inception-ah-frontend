import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./routes";
import PrivateRoute from "./PrivateRoute";

const BaseRoute = () => (
  <Fragment>
    <Switch>
      {routes.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
      {routes.secured.map(({ exact, path, component }, index) => (
        <PrivateRoute
          key={index}
          exact={exact}
          path={path}
          component={component}
        />
      ))}
      <ToastContainer autoClose={2500} />
    </Switch>
  </Fragment>
);

export default BaseRoute;
