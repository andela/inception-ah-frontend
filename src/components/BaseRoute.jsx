import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

<<<<<<< HEAD
import HomePage from "<Pages>/Homepage";
import AuthWrapper from "<Auth>/AuthWrapper";
=======
import HomePage from "../pages/Homepage";
import SocialRedirect from "./auth/SocialAuth";
import SignUpWrapper from "./auth/SignUp";
import Profile from "../pages/ProfilePage";
import VerifyAccount from "./auth/VerifyAccount";
>>>>>>> feat(authsignup):  user should be able to signup

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
