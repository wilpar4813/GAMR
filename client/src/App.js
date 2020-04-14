import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import LoginPage from "./pages/LoginPage.js";
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/login'}>
          <LoginPage />
        </Route>
        <Route exact path={'/register'}>
          <Register />
        </Route>
        <Route exact path={'/'}>
        <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
