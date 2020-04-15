import React, { Component } from 'react';
import {Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import Profile from '../pages/Profile';

const userProfile = (props) => {
    <Container>
    <Row>
        <h1>Hi + " " + props.username</h1>
    </Row>
</Container>
}

export default userProfile;