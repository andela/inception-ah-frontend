// import React from "react";
// import { Route } from "react-router-dom";

// import HomePage from "<pages>/Homepage";

// const BaseRoute = () => <Route path="/" component={HomePage} />;

import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "<components>/routes";

const BaseRoute = () => (
  <Fragment>
    <Switch>
      {Routes.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
            ))
    </Switch>
  </Fragment>
);

export default BaseRoute;
