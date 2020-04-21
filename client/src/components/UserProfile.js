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
  Table
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
      <Table hover>
      <thead>
        <tr>
          <th>Recent Histories</th>
        </tr>
      </thead>
      <tbody>
        {props.searches.map(search => {
          return(
            <tr>
            <td>{search.name}</td>
          </tr>
          )
        })}
       
      </tbody>
    </Table>
      </Row>
    </Container>
  );
};

export default userProfile;
