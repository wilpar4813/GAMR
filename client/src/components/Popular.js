import React from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Card, CardTitle, CardText, CardImg, CardImgOverlay, CardFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faGamepad} from '@fortawesome/free-solid-svg-icons';
import { faPlaystation, faXbox  }from '@fortawesome/free-brands-svg-icons';
import {ReactSVG} from 'react-svg';
import NintendoSwitch from '../svg/nintendo-switch.svg';

const Popular = (props) => {
  return(
    <Container className='py-3'>
      <Row>
        <h2 className='border-bottom-red mb-3'>Popular</h2>
      </Row>
      <Row>
        <Col className='border-right' sm='12' md='4'>
          <ListGroup>
            <ListGroupItem tag='a' action><FontAwesomeIcon className='fab mr-2' icon={faGamepad} />All</ListGroupItem>
            <ListGroupItem tag='a' action><FontAwesomeIcon className='fab mr-2' icon={faXbox} />Xbox One</ListGroupItem>
            <ListGroupItem tag='a' action><FontAwesomeIcon className='fab mr-2' icon={faPlaystation} />Playstation 4</ListGroupItem>
            <ListGroupItem className='d-flex align-items-center' tag='a' action><ReactSVG className='float-left mr-2' src={NintendoSwitch} beforeInjection={svg => {svg.setAttribute('style', 'width: 1rem')}}/>Nintendo Switch</ListGroupItem>
          </ListGroup>
        </Col>
        <Col sm='12' md='8'>
          <Row>
            <Col className='mb-3' sm='12' md='6'>
              <Card>
                <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
                <CardImgOverlay>
                  <div className='rating d-flex justify-content-center align-items-center'>6.0</div>
                </CardImgOverlay>
                <CardFooter>
                  <CardTitle>Title Here</CardTitle>
                  <CardText><small>Genre here</small></CardText>
                </CardFooter>
              </Card>
            </Col>
            <Col className='mb-3' sm='12' md='6'>
              <Card>
                <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
                <CardImgOverlay>
                  <div className='rating d-flex justify-content-center align-items-center'>6.0</div>
                </CardImgOverlay>
                <CardFooter>
                  <CardTitle>Title Here</CardTitle>
                  <CardText><small>Genre here</small></CardText>
                </CardFooter>
              </Card>
            </Col>
            <Col className='mb-3' sm='12' md='6'>
              <Card>
                <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
                <CardImgOverlay>
                  <div className='rating d-flex justify-content-center align-items-center'>6.0</div>
                </CardImgOverlay>
                <CardFooter>
                  <CardTitle>Title Here</CardTitle>
                  <CardText><small>Genre here</small></CardText>
                </CardFooter>
              </Card>
            </Col>
            <Col className='mb-3' sm='12' md='6'>
              <Card>
                <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
                <CardImgOverlay>
                  <div className='rating d-flex justify-content-center align-items-center'>6.0</div>
                </CardImgOverlay>
                <CardFooter>
                  <CardTitle>Title Here</CardTitle>
                  <CardText><small>Genre here</small></CardText>
                </CardFooter>
              </Card>
            </Col>
              <Button className='mx-auto' color='link'>Load More <FontAwesomeIcon className='fas' icon={faChevronDown} /></Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Popular;
