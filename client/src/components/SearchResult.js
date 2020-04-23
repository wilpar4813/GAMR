import React from 'react';
import {Col, Card, Media } from 'reactstrap';

const SearchResult = (props) => {

  return props.results.map(
    (result) => (
      <Col className='mb-3' sm='12'>
        <Media className='border-bottom py-2'>
          <Media left>
            <Media className='mr-2' object src="" alt="game title cover art here" />
          </Media>
          <Media body>
            <Media heading><a href={`/games/${result.id}`}>{result.name}</a></Media>
              {result.summary}
              <Media body className='d-flex justify-content-between align-items-center'>
                <div><p>Release Date: <span className='release-date'>{result.first_release_date}</span></p></div>
                <div><p>Time to beat: <span className='beat-time'>{result.time_to_beat.normally}</span></p></div>
                <div><p>Franchise: <span className='franchise'>{result.franchise.name}</span></p></div>
              </Media>
            </Media>
        </Media>
    </Col>
    )
  )
}

export default SearchResult;
