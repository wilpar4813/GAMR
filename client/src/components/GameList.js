import React from 'react';
import {Col, Card, CardTitle, CardText, CardImg, CardImgOverlay, CardFooter } from 'reactstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import ProgressProvider from '../utils/ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';

const GameList = (props) => {
  return props.games.slice(0, props.showItems).map(
    (game) => (
      <Col className='mb-3' sm='12' md='6'>
        <Card>
          <CardImg src={game.cover.url} alt={`${game.name} cover image`} />
          <CardImgOverlay>
            <div className='rating'>
              <ProgressProvider valueStart={0} valueEnd={Math.round(game.rating)}>
                {(value) =>
                  <CircularProgressbarWithChildren value={Math.round(game.rating)}>
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                      <p className='CircularProgressbar-text mt-2'>{Math.round(game.rating)}</p>
                    </div>
                  </CircularProgressbarWithChildren>}
              </ProgressProvider>
            </div>
          </CardImgOverlay>
          <CardFooter>
            <CardTitle>{game.name}</CardTitle>
            <CardText><small>franchise</small></CardText>
          </CardFooter>
        </Card>
      </Col>
    )
  )
}

export default GameList;
