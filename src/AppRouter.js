import React from "react";
import { Route, Switch } from "react-router";

import Home from "./Home";
import About from "./About";

export default class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}
