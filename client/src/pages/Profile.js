import React, { Component } from 'react';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import api from '../utils/api';
import {Redirect} from 'react-router-dom';
import UserProfile from '../components/UserProfile';

class Profile extends Component {
    state ={
        username: '',
        password: '',
        Redirect: null,
        searches: []
    }

    componentDidMount() {
     api.searchedGames().then(res => {
         console.log(res.data)
         this.setState({searches : res.data})

     })   
    }

    handleOnChange = (event) => {
        const {name , value} = event.target

        this.setState({
            [name] : value
        })
        
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        
        console.log(userData, 'USER DATA');

        api.getUser().then(response => {
            this.setState({username : response.data.username, Redirect : true })
        }) 
    }



    render() {
        if(this.state.Redirect) {
            return <Redirect to={"/login"} />
        }

        return (
            <>
            {/* <MainNav email={this.state.email} handleOnChange={this.state.handleOnChange} handleOnSubmit={this.state.handleOnSubmit} isAuth={this.state.isAuth} /> */}
            <UserProfile searches={this.state.searches} />
            <Footer />
            </>
        );
    }
   
}

export default Profile;