import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Calculator from "./pages/Calculator/Calculator";
import Graph from "./pages/Graph/graph";

export default function App() {
  return (
    <Router>
      <Link to="/">Calculator</Link>
      <Link to="/graph">Graph</Link>
      <Switch>
        <Route path="/graph">
          <Graph />
        </Route>
        <Route path="/">
          <Calculator />
        </Route>
      </Switch>
    </Router>
  );
}
