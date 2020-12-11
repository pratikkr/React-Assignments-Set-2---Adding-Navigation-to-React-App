import React, { Component, useState } from "react";
import "../styles/App.css";
import { Home } from "./home";
import { About } from "./about";
import { NoMatch } from "./nomatch";
import LocationDisplayPath from "./LocationDisplay";
import { Link, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={NoMatch} />
        </Switch>
        <LocationDisplayPath />
        {/* Do not remove the main div */}
      </div>
    );
  }
}

export default App;
export const LocationDisplay = LocationDisplayPath;
