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

    handleOnSubmit = (event) => {
       event.preventDefault();
       const userData = {
           email: this.state.email,
           password: this.state.password
       }
       
       console.log('USER DATA', userData);

        api.login(userData).then(response => {
            console.log(response.data);
            this.setState({Redirect: true});
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
