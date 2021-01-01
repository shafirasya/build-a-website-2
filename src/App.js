import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Details from "./containers/Details";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        {/* Details Route */}
        <Route path="/city">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
