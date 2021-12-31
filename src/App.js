import "./assets/styles/App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/styles/App.css";
import Homepage from "./components/homepage";
function App() {
  const routes = [{ path: "/", component: Homepage }];
  return (
    <Router basename={window.location.pathname || ""}>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact
            component={route.component}
            path={route.path}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
