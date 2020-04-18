import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  ListGroup,
  ListGroupItem,
  Media,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactSVG } from "react-svg";
import Popular from "../components/Popular";

const userProfile = (props) => {
  return (
    <Container>
      <Row>
        <h1>Welcome to your Profile</h1>
      </Row>
      <Row>
        <Col sm="12" md="4">
          <Card>
            <CardTitle className="border border-dark">Recent History</CardTitle>
            <ListGroup className="border border-dark">
              <ListGroupItem>item1</ListGroupItem>
              <ListGroupItem>item2</ListGroupItem>
              <ListGroupItem>item3</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col className="6">
          <Card className="border border-dark"> 
            <CardTitle >Your Collection</CardTitle>
            <CardText>
              <small>Game1</small>
            </CardText>
            <CardText>
              <small>Game2</small>
            </CardText>
            <CardText>
              <small>Game3</small>
            </CardText>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
          <Col>
           <Card className="border border-dark">
             <CardTitle>Other things</CardTitle>
             <CardText>the things</CardText>
           </Card>
          </Col>
        </Row>
    </Container>
  );
};

export default userProfile;
