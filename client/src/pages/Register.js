import React, { Component } from 'react';
import Register from '../components/Register';
import { compare } from 'bcryptjs';
import api from '../utils/api';

export default class RegisterPage extends Component {
     state= {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
     }

    handleOnChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value        
        })
    }

   handleSubmit = (event) => {
       event.preventDefault();
       const userData = {
           name : this.state.firstName + " " + this.state.lastName,
           email: this.state.email,
           password: this.state.password,
           userName: this.state.userName
       }
    api.createUser(userData).then(data => {
        console.log("success");

    })
   }

    render() {
        return (
            <div>
                <Register email = {this.state.email} firstName = {this.state.firstName} lastName = {this.state.lastName} password = {this.state.password} userName = {this.state.userName} 
                handleOnChange = {this.handleOnChange} handleSubmit = {this.handleSubmit}/>
            </div>
        )
    }
  
}