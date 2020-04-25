import React from 'react';
import {Col, Card, Media } from 'reactstrap';
import moment from "moment";

const SearchResult = (props) => {

  return props.results.map(
    (result) => (
      <Col className='mb-3' sm='12'>
        <Media className='border-bottom py-2'>
          <Media left>
            <Media className='mr-2' object src={result.cover ? result.cover.url: "No Data Available"} alt={`${result.name} cover image`} />
          </Media>
          <Media body>
            <Media heading><a href={`/games/${result.name}`}>{result.name}</a></Media>
              {result.summary ? result.summary: "No Data Available"}
              <Media body className='d-flex justify-content-between align-items-center'>
                <div><p>Release Date: <span className='release-date'>{moment(result.first_release_date).format("LL") ? moment(result.first_release_date).format("LL"): "No Data Available"}</span></p></div>
                <div><p>Platform: <span className='platform'>{result.platforms ? result.platforms.name: "No Data Available"}</span></p></div>
                <div><p>Franchise: <span className='franchise'>{result.franchise ? result.franchise.name: "No Data Available"}</span></p></div>
              </Media>
            </Media>
        </Media>
    </Col>
    )
  )
}

export default SearchResult;
