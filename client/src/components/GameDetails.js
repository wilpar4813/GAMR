import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import Screenshots from './Screenshots';
import api from '../utils/api';

const GameDetails = (props) => {

  const [gameID, setGameID] = useState('');
  const [gameData, setGameData] = useState([]);
  const [followGame, setFollowGame] = useState([]);
  
  async function getID(){
    const url = window.location.pathname;
    const urlArray= url.split('/');

    let id = urlArray[2];

    let idArray = id.split('%20').join(" ");


    setGameID(idArray);

    getGame(idArray)
  }

  async function getGame(query){
    const res = await api.search(query);
    setGameData(res.data[0]);
  }

  useEffect(() => {
    getID();
  })

    return (
      <div className='game-bg py-3'>
      <Container className='py-3 game-container'>
        <Row className='d-flex flex-row game-info'>
          <Col sm='4' md='4'>
            <img className='game-info--image' src={gameData.cover ? gameData.cover.url: "No Data Available"} />
          </Col>
          <Col sm='8' md='8' className='game-info--data d-flex flex-column justify-content-between align-items-start'>
            <div className='game-info--description'>
              <h1 className='game-info--title'>{gameData.name ? gameData.name: "No Data Available"}</h1>
              <div className='my-3'>
                <Button className='' color='danger'>Follow</Button>
              </div>
              <div className='game-info--details'>
                <p><b>Genre: </b><span className='game-info--genre'>Genre here</span></p>
                <p><b>Platforms: </b><span className='game-info--genre'>Platforms here</span></p>
              </div>
              <p className='game-info--plot'>{gameData.summary ? gameData.summary: "No Data Available"}</p>
            </div>
            <div className='game-info--stats d-flex justify-content-between align-items-center'>
              <div><p>Release Date: <span className='release-date'>{gameData.first_release_date ? gameData.first_release_date: "No Data Available"}</span></p></div>
              <div><p>Time to beat: <span className='beat-time'>normal time here</span></p></div>
              <div><p>Franchise: <span className='franchise'>{gameData.franchise ? gameData.franchise.name: "No Data Available"}</span></p></div>
            </div>
          </Col>
        </Row>
        <Screenshots screenshots={gameData.screenshots}
      </Container>
      </div>
    )
}

export default GameDetails;
