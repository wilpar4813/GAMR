import React from 'react';
import {Col, Card, Media } from 'reactstrap';

const SearchResult = (props) => {

  return props.results.map(
    (result) => (
      <Col className='mb-3' sm='12'>
        <Media className='border-bottom py-2'>
          <Media left>
            <Media className='mr-2' object src={result.cover.url} alt={`${result.name} cover image`} />
          </Media>
          <Media body>
            <Media heading><a href={`/games/${result.name}`}>{result.name}</a></Media>
              {result.summary}
              <Media body className='d-flex justify-content-between align-items-center'>
                <div><p>Release Date: <span className='release-date'>{result.release_dates.human}</span></p></div>
                <div><p>Platform: <span className='platform'>{result.release_dates.platform}</span></p></div>
                <div><p>Franchise: <span className='franchise'>{result.franchise.name}</span></p></div>
              </Media>
            </Media>
        </Media>
    </Col>
    )
  )
}

export default SearchResult;
