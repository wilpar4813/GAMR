import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import LoginPage from "./pages/LoginPage.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/login'}>
          <LoginPage />
        </Route>
        <Route exact path={'/'}>
        <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
