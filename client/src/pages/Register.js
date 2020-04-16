import React, { Component } from 'react';
import Register from '../components/Register';
import { compare } from 'bcryptjs';
import api from '../utils/api';
import { Redirect } from "react-router-dom";

export default class RegisterPage extends Component {
     state= {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        Redirect: null
     }

    handleOnChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value        
        })
    }

   handleSubmit = (event, userData) => {
       console.log(userData);
       event.preventDefault();
    //    const userData = {
    //        name : this.state.firstName + " " + this.state.lastName,
    //        email: this.state.email,
    //        password: this.state.password,
    //        userName: this.state.userName
    //    }
    api.createUser(userData).then(data => {
        console.log("success");
        this.setState({Redirect: true})

    })
   }

    render() {
        if (this.state.Redirect) {
            return <Redirect to={"/"} />
          }
        return (
            <div>
                <Register email = {this.state.email} firstName = {this.state.firstName} lastName = {this.state.lastName} password = {this.state.password} userName = {this.state.userName} 
                handleOnChange = {this.handleOnChange} handleSubmit = {this.handleSubmit}/>
            </div>
        )
    }
  
}