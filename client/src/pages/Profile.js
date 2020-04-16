import React, { Component } from 'react';
import MainNave from '../components/MainNav';
import Footer from '../components/Footer';
import api from '../utils/api';
import {Redirect} from 'react-router-dom';

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
            <MainNave handleOnChange={this.state.handleOnChange} handleOnSubmit={this.state.handleOnSubmit} />
            <Footer />
            </>
        );
    }
   
}

export default Profile;