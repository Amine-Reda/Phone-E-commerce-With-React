import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Carts from "./Components/Carts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/cart">
            <Header />
            <Carts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
