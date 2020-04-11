import React from 'react';
import {ReactSVG} from 'react-svg';
import image from '/images/gamer.svg';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = (props) => {
  return (
      <>
    <Form style={{background: "gold", margin: "70px"}}>
      <FormGroup >
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      <Button className="btn btn-danger" style={{border: "black"}}>Submit</Button>
      <a href="#" style={{color: "black"}}>Register</a>
    </Form>
     <ReactSVG src={image}  beforeInjection={svg => {svg.setAttribute('style', 'width: 100%')}} />
     </>
  );
}

export default Login;