import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "<components>/routes";
import PrivateRoute from "<components>/PrivateRoute";

const BaseRoute = () => (
  <Fragment>
    <Switch>
      {Routes.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
      {Routes.secured.map(({ exact, path, component }, index) => (
        <PrivateRoute
          key={index}
          exact={exact}
          path={path}
          component={component}
        />
      ))}
    </Switch>
  </Fragment>
);

export default BaseRoute;
