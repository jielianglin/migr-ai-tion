import React from "react";
import { Route, Switch,} from "react-router";

import Home from "./Home";
import About from "./About";

export default class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    );
  }
}
