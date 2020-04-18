import React, { Component } from "react";
import Login from "../components/Login";
import api from "../utils/api";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        Redirect: null
    }

    handleOnChange = (event) => {
        const {name, value} = event.target

        this.setState({ 
            [name] : value
        })
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


  render() {
      if(this.state.Redirect) {
          return <Redirect to={"/"} />
      }
    return (
      <div className="vh-100 bg-dark">
        <Login   email={this.state.email} password={this.state.password}  handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default LoginPage;
