import React, { Component } from "react";
import Masthead from '../components/Masthead';
import MainNav from '../components/MainNav';
import Gallery from '../components/Gallery';
import Popular from '../components/Popular';
import Upcoming from '../components/Upcoming';
import Footer from '../components/Footer';
import api from '../utils/api';
import { Redirect } from "react-router-dom";
import { ButtonToggle } from "reactstrap";



class Home extends Component {
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
  componentDidMount() {

    api.getUser().then(response => {
      const userEmail = sessionStorage.getItem("email")
      if( userEmail != undefined ) {
        this.setState({ email : userEmail})
      }
    })
  }

  render() {
    return (
      <>
      { this.state.email != undefined ? console.log('LOOK HERE', this.state.email) : ''}
      {/* <MainNav handleOnSubmit={this.handleOnSubmit} email={this.state.email != undefined ? this.state.email : ""}/> */}
        <Masthead />
        <Popular />
        <Gallery />
        <Upcoming />
        <Footer />
        </>
    );
  }

}

export default Home;
