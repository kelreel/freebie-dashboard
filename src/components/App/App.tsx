import "./App.scss";
import "normalize.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "../Layout/Sidebar/Sidebar";
import Overview from "../Overview/Overview";
import Page404 from "../Layout/Page404/Page404";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
