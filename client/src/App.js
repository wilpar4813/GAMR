import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home.js";
import LoginPage from "./pages/LoginPage.js";
import Register from './pages/Register';
import Profile from './pages/Profile';
import Game from './pages/Game';
import Search from './pages/Search';
import MainNav from "./components/MainNav.js";
import api from "./utils/api";

class App extends Component {
  state = {
    username: "",
    isLogin: false
  }
  handleOnChange = (event) => {
    const { name, value} = event.target;
    this.setState({
      [name] : value
    })
  }

  handleOnSubmit = (loggedIn) => {
    console.log("loged in", loggedIn)


      api.logout().then(res => {
        console.log(res.data.username, "logged out");
        this.setState({ isLogin : false})
        window.location.href="/login"
      })
 }

  componentDidMount() {
    api.getUser().then(res => {
      console.log(res.data.username, "username");
      if(res.data.username != undefined) {
        this.setState({ isLogin : true})
      }
    })
  }

  render() {
    return (
      <Router>
        {window.location.pathname != "/login" && window.location.pathname != "/register" ?  <MainNav isLogin={this.state.isLogin} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} username={this.state.username != undefined ? this.state.username : ""}/> : ""}
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
          <Route path={'/games/:id'}>
            <Game />
          </Route>
          <Route path={'/search'}>
            <Search />
          </Route>
        </Switch>
    </Router>
    )
  }

}

export default App;
