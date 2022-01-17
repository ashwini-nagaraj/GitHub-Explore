import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchRepo from "./container/SearchRepo";
import Search from './component/searchComponent'

import "./App.css";

function App() {

  return (
    <BrowserRouter data-testid="router">
      <Switch>
        <Route data-testid="serach-route" path="/" component={Search} exact />
        <Route data-testid="search-repo-route" path="/:userName" component={SearchRepo} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;