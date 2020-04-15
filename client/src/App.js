import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import LoginPage from "./pages/LoginPage.js";
import Register from './pages/Register';
import Game from './pages/Game';

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
        <Route exact path={'/games/:id'}>
          <Game />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
