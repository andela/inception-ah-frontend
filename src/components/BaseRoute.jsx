import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import HomePage from "<Pages>/Homepage";
import AuthWrapper from "<Auth>/AuthWrapper";

const BaseRoute = () => (
  <Fragment>
    <Route exact path="/" component={HomePage} />
    <Route path="/:page" component={AuthWrapper} />
  </Fragment>
);

export default BaseRoute;
