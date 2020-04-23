import React, { Component } from "react";
import Masthead from '../components/Masthead';
import MainNav from '../components/MainNav';
import Popular from '../components/Popular';
import News from '../components/News';
import Upcoming from '../components/Upcoming';
import Footer from '../components/Footer';
import api from '../utils/api';
import { Redirect } from "react-router-dom";
import { ButtonToggle } from "reactstrap";



class Home extends Component {
    state = {
      username: ""
    }
    handleOnSubmit = (loggedIn) => {


      const userData = {
          username: this.state.username,
          password: this.state.password
      }

      console.log('USER DATA', userData);

       api.login(userData).then(response => {
           console.log(response.data);
           sessionStorage.setItem("username", response.data.username)
           this.setState({Redirect: true, username : response.data.username});
           if(loggedIn === false && response.data.username === undefined) {
             sessionStorage.setItem("username", "")
             window.location.href="/"
           }
       })



   }
  componentDidMount() {

    api.getUser().then(response => {
      const username = sessionStorage.getItem("username")
      if(username != undefined ) {
        this.setState({ username : username})
      }
    })
  }

  render() {
    return (
      <>
      { this.state.username != undefined ? console.log('LOOK HERE', this.state.username) : ''}
        <Masthead />
        <Popular />
        <News />
        <Upcoming />
        <Footer />
        </>
    );
  }

}

export default Home;
