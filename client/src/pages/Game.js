import React, { Component } from 'react';
import MainNav from '../components/MainNav';
import GameDetails from '../components/GameDetails';
import Footer from '../components/Footer';
import api from '../utils/api';

class Game extends Component {

  state = {
    email : ""
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
         if(loggedIn === false && response.data.email.length === 0) {
           sessionStorage.setItem("email", "")
         }
     })


    
 }
  componentDidMount() {
    api.getUser().then(response => {
      this.setState({ email : response.data.email })
    })
  }
  render () {
    return (
      <>
      {/* <MainNav handleOnSubmit={this.handleOnSubmit} email={this.state.email}/> */}
      <GameDetails />
      <Footer />
      </>
    )
  }

}

export default Game;
