import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import UserPage from "./pages/UserPage";

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:roomName" component={UserPage} />
    </Switch>
  </BrowserRouter>,
  document.querySelector("#root")
);
