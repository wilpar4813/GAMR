import React, {useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Card, CardTitle, CardText, CardImg, CardImgOverlay, CardFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faGamepad} from '@fortawesome/free-solid-svg-icons';
import { faPlaystation, faXbox  }from '@fortawesome/free-brands-svg-icons';
import {ReactSVG} from 'react-svg';
import NintendoSwitch from '../svg/nintendo-switch.svg';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import ProgressProvider from '../utils/ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import api from '../utils/api';


const Popular = (props) => {

  const [showAll, setShowAll] = useState(true);
  const [showPS, setShowPS] = useState(false);
  const [showXbox, setShowXbox] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);
  const [ allPopular, setAllPopular ] = useState([]);
  const [ xboxPop, setXboxPop ] = useState([]);
  const [ psPop, setPSPop ] = useState([]);
  const [ switchPop, setSwitchPop ] = useState([]);
  const [showItems, setShowItems] = useState(4);

  async function fetchPopular(){
    const res = await api.popularAll();

    setAllPopular(res.data);
  }

  async function updateShowItems () {
    setShowItems(showItems +4 ) ;
  }

  async function fetchXbox(){
    const res = await api.popularXboxOne();

    setXboxPop(res.data);
  }

  async function fetchPS4(){
    const res = await api.popularPS4();

    setPSPop(res.data);
  }

  async function fetchSwitch(){
    const res = await api.popularSwitch();

    setSwitchPop(res.data);
  }

  useEffect(() => {
    fetchPopular();

  })
  return(
    <Container className='py-3'>
      <Row>
        <h2 className='border-bottom-red mb-3'>Popular</h2>
      </Row>
      <Row>
        <Col className='border-right' sm='12' md='4'>
          <ListGroup>
            <ListGroupItem tag='a' action className={showAll === true ? "active" : ""}><FontAwesomeIcon className='fab mr-2' icon={faGamepad} />All</ListGroupItem>
            <ListGroupItem tag='a' action className={showXbox === true ? "active" : ""}><FontAwesomeIcon className='fab mr-2' icon={faXbox} />Xbox One</ListGroupItem>
            <ListGroupItem tag='a' action className={showPS === true ? "active" : ""}><FontAwesomeIcon className='fab mr-2' icon={faPlaystation} />Playstation 4</ListGroupItem>
            <ListGroupItem className='d-flex align-items-center' tag='a' action className={showSwitch === true ? "active" : ""}><ReactSVG className='float-left mr-2' src={NintendoSwitch} beforeInjection={svg => {svg.setAttribute('style', 'width: 1rem')}}/>Nintendo Switch</ListGroupItem>
          </ListGroup>
        </Col>
        <Col sm='12' md='8'>
          <Row>
          {allPopular.slice(0, showItems).map(
            (game) => (
              <Col className='mb-3' sm='12' md='6'>
                <Card>
                  <CardImg width="100%" src={game.cover.url} alt="Card image cap" />
                  <CardImgOverlay>
                    <div className='rating'>
                      <ProgressProvider valueStart={0} valueEnd={Math.round(game.rating)}>
                        {(value) => <CircularProgressbarWithChildren value={Math.round(game.rating)}>
                          <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                            <p className='CircularProgressbar-text mt-2'>{Math.round(game.rating)}</p>
                          </div>
                        </CircularProgressbarWithChildren>}
                      </ProgressProvider>
                    </div>;
                  </CardImgOverlay>
                  <CardFooter>
                    <CardTitle>{game.name}</CardTitle>
                    <CardText><small>franchise</small></CardText>
                  </CardFooter>
                </Card>
              </Col>
            )
          )}
            <Button  onClick={updateShowItems} className='mx-auto' color='link'>Load More <FontAwesomeIcon className='fas' icon={faChevronDown} /></Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Popular;
