import React, { Component } from "react";
import Login from "../components/Login";
import api from "../utils/api";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        Redirect: null
    }

    handleOnChange = (event) => {
        const {name, value} = event.target

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
       
       

        api.login(userData).then(res => {
           console.log("Res", res)
           if(res.data.username != undefined) {
             window.location.href="/"
           }
        })


       
    }


  render() {
      
    return (
      <div className="vh-100 bg-dark">
        <Login   username={this.state.username} password={this.state.password}  handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default LoginPage;
