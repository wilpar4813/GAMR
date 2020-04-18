import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home.js";
import LoginPage from "./pages/LoginPage.js";
import Register from './pages/Register';
import Profile from './pages/Profile';
import Game from './pages/Game';
import MainNav from "./components/MainNav.js";
import api from "./utils/api";

class App extends Component {
  state = {
    email: ""
  }

  handleOnSubmit = (loggedIn) => {
    const userData = {
        email: this.state.email,
        password: this.state.password
    }
    
    console.log('USER DATA', userData);

     api.login(userData).then(response => {
         console.log(response.data);
         sessionStorage.setItem("email", response.data.email)
         this.setState({Redirect: true, email : response.data.email});
         if(loggedIn === false && response.data.email === undefined) {
           sessionStorage.setItem("email", "")
           window.location.href="/"
         }
     })

 }
  render() {
    return (
      <Router>
        <MainNav handleOnSubmit={this.handleOnSubmit} email={this.state.email != undefined ? this.state.email : ""}/>
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
          <Route exact path={'/profile'}>
            <Profile />
          </Route>
        </Switch>
      <Switch>
        <Route path={'/games/:id'}>
          <Game />
        </Route>
      </Switch>
    </Router>
    )
  }
  
}

export default App;
