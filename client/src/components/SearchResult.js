import React from 'react';
import {Col, Card, CardTitle, CardText, CardImg, CardImgOverlay, CardFooter } from 'reactstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import ProgressProvider from '../utils/ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';

const SearchResult = (props) => {

  return props.results.map(
    (result) => (
      <Col className='mb-3' sm='12' md='6'>
        <Card>
          <CardImg src={result.cover.url} alt="Card image cap" />
          <CardImgOverlay>
            <div className='rating'>
              <ProgressProvider valueStart={0} valueEnd={Math.round(result.rating)}>
                {(value) =>
                  <CircularProgressbarWithChildren value={Math.round(result.rating)}>
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                      <p className='CircularProgressbar-text mt-2'>{Math.round(result.rating)}</p>
                    </div>
                  </CircularProgressbarWithChildren>}
              </ProgressProvider>
            </div>
          </CardImgOverlay>
          <CardFooter>
            <CardTitle>{result.name}</CardTitle>
            <CardText><small>franchise</small></CardText>
          </CardFooter>
        </Card>
      </Col>
    )
  )
}

export default SearchResult;
