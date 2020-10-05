import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NameForm } from "./pages/HomePage";
import UserPage from "./pages/UserPage";
const React = require("react");

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/michi" component={NameForm} />
      <Route path="/:id" component={UserPage} />
    </Switch>
  );
}
