import React, { Component } from 'react';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import api from '../utils/api';
import {Redirect} from 'react-router-dom';
import UserProfile from '../components/UserProfile';

class Profile extends Component {
    state ={
        email: '',
        password: '',
        Redirect: null 
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
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData, 'USER DATA');

        api.getUser("/logout", function (req, res) {
            this.setState({ Redirect : true });
        })
    }


    render() {
        if(this.state.Redirect) {
            return <Redirect to={"/login"} />
        }

        return (
            <>
            <MainNav handleOnChange={this.state.handleOnChange} handleOnSubmit={this.state.handleOnSubmit} />
            <UserProfile />
            <Footer />
            </>
        );
    }
   
}

export default Profile;