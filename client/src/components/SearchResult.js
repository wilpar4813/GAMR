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
            </Media>
        </Media>
    </Col>
    )
  )
}

export default SearchResult;
