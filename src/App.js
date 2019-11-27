import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WithoutCallBack from "./WithoutCallBack";
import WithCallBackDependency from "./WithCallBackDependency";
import WithCallBack from "./WithCallBack";

const App = () => (
  <Router>
    <Switch>
      <Route path="/define-event-handler-in-component">
        <WithoutCallBack />
      </Route>
      <Route path="/use-callback-event-handler-without-dependencies">
        <WithCallBack />
      </Route>
      <Route path="/use-callback-event-handler">
        <WithCallBackDependency />
      </Route>
    </Switch>
  </Router>
);

export default App;
