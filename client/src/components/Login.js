import React from "react";
import { ReactSVG } from "react-svg";
import image from "../svg/gamer.svg";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from "reactstrap";

const Login = (props) => {
  return (
    <>
      <Container className='py-3'>
      <h1 className='text-white'>Log In</h1>
        <Row className='d-flex flex-row justify-content-center align-items-center'>
          <Col md='6' >
            <Form className='border rounded p-3 d-flex flex-column justify-content-between'>
              <FormGroup>
                <Label className='text-white' for="exampleEmail">Username</Label>
                <Input onChange={ props.handleOnChange }
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={props.username}
                />
              </FormGroup>
              <FormGroup>
                <Label className='text-white' for="examplePassword">Password</Label>
                <Input onChange={ props.handleOnChange }
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  value={props.password}
                />
              </FormGroup>
              <Button onClick={ props.handleOnSubmit} className='mb-3'color='danger' type='submit' style={{ border: "black" }}>
                Log in
              </Button>
              <Button href={'/register'} className='mb-3' outline color='secondary'>
                Register
              </Button>
            </Form>
          </Col>
          <Col md='6'>
          <ReactSVG src={image}  beforeInjection={svg => {svg.setAttribute('style', 'width: 100%')}} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
