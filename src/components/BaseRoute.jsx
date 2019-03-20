import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/Homepage";
import SocialRedirect from "./auth/SocialAuth";
import SignUpWrapper from "./auth/SignUp";
import Profile from "../pages/Profile";
import VerifyAccount from "./auth/VerifyAccount";

const BaseRoute = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUpWrapper} />
      <Route path="/auth/*/redirect" component={SocialRedirect} />
      <Route path="/profile" component={Profile} />
      <Route path="/auth/verification" component={VerifyAccount} />
    </Switch>
  </Fragment>
);

export default BaseRoute;
