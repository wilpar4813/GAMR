import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Media, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faCheck} from '@fortawesome/free-solid-svg-icons';
import api from '../utils/api';

const Upcoming = (props) => {

  const [ hasError, setErrors ] = useState(false);
  const [ recentReleased, setRecentReleased ] = useState([]);
  const [ comingSoon, setComingSoon ] = useState([]);
  const [ mostAnticipated, setAnticipated ] = useState([]);
  const [followed, setFollowed ] = useState(false);

  async function handleOnclick(){
    //add follow to database here
    setFollowed(true)
  }

  async function fetchReleased(){
    const res = await api.recentReleases();

    setRecentReleased(res.data);
  }

  async function fetchSoon(){
    const res = await api.comingSoon();

    setComingSoon(res.data);
  }

  async function fetchAnticipated(){
    const res = await api.mostAnticiptated();

    setAnticipated(res.data);
  }

  useEffect(() => {
    fetchReleased();
    fetchSoon();
    fetchAnticipated();
  })

  return (
    <>
      <Container className='py-3'>
        <Row className='py-2'>
          <h2 className='border-bottom-red'>Upcoming</h2>
        </Row>
        <Row className='py-2'>
          <Col sm='12' md='4'>
            <Row>
              <h3 className='upcoming-subtile mb-3'>Recently Released</h3>
            </Row>
            {recentReleased.map(
              (newGame) => (
                <Media className='mb-3'>
                  <Media left>
                    <Media className='mr-2' object src={newGame.cover.url} alt={`${newGame.name} cover image`} />
                  </Media>
                <Media body>
                  <Media heading><a href={`/games/${newGame.name}`}>{newGame.name}</a></Media>
                  <small className='text-muted'>{newGame.release_dates[0].human}</small>
                </Media>
                </Media>
              )
            )}
          </Col>
          <Col sm='12' md='4'>
            <Row>
              <h3 className='upcoming-subtile mb-3'>Coming Soon</h3>
            </Row>
            {comingSoon.map(
              (upcomingGame) => (
                <Media className='mb-3'>
                  <Media left>
                    <Media className='mr-2' object src={upcomingGame.cover.url} alt={`${upcomingGame.name} cover image`} />
                  </Media>
                <Media body>
                  <Media heading><a href={`/games/${upcomingGame.name}`}>{upcomingGame.name}</a></Media>
                  <small className='text-muted'>{upcomingGame.release_dates[0].human}</small>
                </Media>
                </Media>
              )
            )}
          </Col>
          <Col sm='12' md='4'>
            <Row>
              <h3 className='upcoming-subtile mb-3'>Most Anticipated</h3>
            </Row>
            {mostAnticipated.map(
              (hypedGame) => (
                <Media className='mb-3'>
                  <Media left>
                    <Media className='mr-2' object src={hypedGame.cover.url} alt={`${hypedGame.name} cover image`} />
                  </Media>
                <Media body>
                  <Media heading><a href={`/games/${hypedGame.name}`}>{hypedGame.name}</a></Media>
                  <small className='text-muted'>{hypedGame.release_dates[0].human}</small>
                </Media>
                </Media>
              )
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upcoming;
