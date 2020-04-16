import React, { Component } from "react";
import Masthead from '../components/Masthead';
import MainNav from '../components/MainNav';
import Gallery from '../components/Gallery';
import Popular from '../components/Popular';
import Upcoming from '../components/Upcoming';
import Footer from '../components/Footer';
import api from '../utils/api';


class Home extends Component {
    state = {
      userName: ""
    }

  componentDidMount() {
    api.getUser().then(response => {
      this.setState({ userName: response.data.userName})
    })
  }

  render() {
    return (
      <>
      { this.state.userName != undefined ? console.log('LOOK HERE', this.state.userName) : ''}
      <MainNav />
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
