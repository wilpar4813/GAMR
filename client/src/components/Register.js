import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from "reactstrap";

const Register = (props) => {
    return (
        <>
        <Container className="vh-100 mw-100" style={{backgroundColor: "black"}}>
        <Row className='d-flex flex-row justify-content-center align-items-center'>
          <Col md='6' >
          <h1 className='text-white'>Sign Up</h1>
            <Form className='border rounded p-3 d-flex flex-column justify-content-between'>
              <FormGroup>
              <Label className='text-white' for="First Name">First Name</Label>
                <Input onChange={props.handleOnChange}
                  type="text"
                  name="firstName"
                  id=""
                  placeholder="First Name"
                />
                 <Label className='text-white' for="Last Name">Last Name</Label>
                <Input onChange={props.handleOnChange}
                  type="text"
                  name="lastName"
                  id=""
                  placeholder="Last Name"
                />
                <Label className='text-white' for="gameSystem">Game System</Label>
                <Input onChange={props.handleOnChange}
                  type="text"
                  name="name"
                  id=""
                  placeholder="Preferred Game System"
                />
                <Label className='text-white' for="exampleEmail">Email</Label>
                <Input onChange={props.handleOnChange}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label className='text-white' for="examplePassword">Password</Label>
                <Input onChange={props.handleOnChange}
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <Label className='text-white' for="examplePassword">User Name</Label>
                <Input onChange={props.handleOnChange}
                  type="user"
                  name="userName"
                  id="userName"
                  placeholder="User Name"
                />
              </FormGroup>
              <Button onClick={(e) => {
                  props.handleSubmit(e)
              }}className='mb-3'color='danger' type='submit' style={{ border: "black" }}>
                Submit 
              </Button>
            </Form>
          </Col>
        </Row>
        </Container>
        </>
    )
};

export default Register;
