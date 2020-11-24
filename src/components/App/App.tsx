import "./App.scss";
import "normalize.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "../Layout/Sidebar/Sidebar";
import Overview from "../Overview/Overview";
import Page404 from "../Layout/Page404/Page404";
import { Provider } from "react-redux";
import store from "../../store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
