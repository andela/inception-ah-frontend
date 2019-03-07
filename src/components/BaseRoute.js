import React from "react";
import { Route } from "react-router-dom";

import HomePage from "<Pages>/Homepage";

const BaseRoute = () => <Route exact path="/" component={HomePage} />;

export default BaseRoute;
