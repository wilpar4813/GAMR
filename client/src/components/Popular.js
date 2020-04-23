import React, {useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem} from 'reactstrap';
import GameList from './GameList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faGamepad} from '@fortawesome/free-solid-svg-icons';
import { faPlaystation, faXbox  }from '@fortawesome/free-brands-svg-icons';
import {ReactSVG} from 'react-svg';
import NintendoSwitch from '../svg/nintendo-switch.svg';

import api from '../utils/api';


const Popular = (props) => {

  const [activeItem, setActiveItem] = useState(0)
  const [ allPopular, setAllPopular ] = useState([]);
  const [ xboxPop, setXboxPop ] = useState([]);
  const [ psPop, setPSPop ] = useState([]);
  const [ switchPop, setSwitchPop ] = useState([]);
  const [showItems, setShowItems] = useState(4);
  const [updateTrigger, setUpdateTrigger] = useState(false);



  async function updateShowItems() {
    setShowItems(showItems + 4 ) ;
    if(showItems >= 20){
      setUpdateTrigger(true);
    }
  }

  async function getPopular(){

    const res = await api.popularAll();

    setAllPopular(res.data);

    setActiveItem(0);
  }

  async function getXbox() {
    const res = await api.popularXboxOne();

    setXboxPop(res.data);

    setActiveItem(1)
  }

  async function getPS4() {
    const res = await api.popularPS4();

    setPSPop(res.data);

    setActiveItem(2)
  }

  async function getSwitch(){

    const res = await api.popularSwitch();

    setSwitchPop(res.data);

    setActiveItem(3);
  }


  function getGames() {
    if (activeItem === 1) {
      return xboxPop;
    }
    if (activeItem === 2) {
      return psPop;
    }
    if (activeItem === 3){
      return switchPop;
    }
    return allPopular;
  }

  useEffect(() => {
    getPopular();

  } ,[])
  return(
    <Container className='py-3'>
      <Row>
        <h2 className='border-bottom-red mb-3'>Popular</h2>
      </Row>
      <Row>
        <Col className='border-right' sm='12' md='4'>
          <ListGroup>
            <ListGroupItem tag='a' action className={activeItem === 0 ? "active" : ""} onClick={getPopular}><FontAwesomeIcon className='fab mr-2' icon={faGamepad} />All</ListGroupItem>
            <ListGroupItem tag='a' action className={activeItem === 1 ? "active" : ""} onClick={getXbox}><FontAwesomeIcon className='fab mr-2' icon={faXbox}  />Xbox One</ListGroupItem>
            <ListGroupItem tag='a' action className={activeItem === 2 ? "active" : ""} onClick={getPS4}><FontAwesomeIcon className='fab mr-2' icon={faPlaystation}  />Playstation 4</ListGroupItem>
            <ListGroupItem className='d-flex align-items-center' tag='a' action className={activeItem === 3 ? "active" : ""} onClick={getSwitch}><ReactSVG className='float-left mr-2' src={NintendoSwitch} beforeInjection={svg => {svg.setAttribute('style', 'width: 1rem')}}/>Nintendo Switch</ListGroupItem>
          </ListGroup>
        </Col>
        <Col sm='12' md='8'>
          <Row>
          <GameList games={getGames()} showItems={showItems}/>
            <Button  onClick={updateShowItems} className={updateTrigger === true ? "mx-auto d-none" : "mx-auto"} id='update-trigger' color='link'>Load More <FontAwesomeIcon className='fas' icon={faChevronDown} /></Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Popular;
