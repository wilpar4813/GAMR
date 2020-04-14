import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaystation, faXbox  }from '@fortawesome/free-brands-svg-icons';
import {ReactSVG} from 'react-svg';
import NintendoSwitch from '../svg/nintendo-switch.svg';

const Upcoming = (props) => {


  return (
    <>
      <Container className='py-3'>
        <Row className='py-2'>
          <h2 className='border-bottom-red'>Upcoming Releases</h2>
        </Row>
        <Row className='py-2'>
          <Col sm='12' md='4'>
            <h3><FontAwesomeIcon className='fab mr-2' icon={faXbox} />Xbox One</h3>
          </Col>
          <Col sm='12' md='4'>
            <h3><FontAwesomeIcon className='fab mr-2' icon={faPlaystation} />Playstation</h3>
          </Col>
          <Col sm='12' md='4'>
            <h3><ReactSVG className='float-left mr-2' src={NintendoSwitch} beforeInjection={svg => {svg.setAttribute('style', 'width: 1.75rem')}}/>Nintendo Switch</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upcoming;
