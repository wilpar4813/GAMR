import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import api from '../utils/api';

const News = (props) => {

  const [ news, setNews ] = useState([]);

  async function fetchNews(){
    const res = await api.recentNews();

    console.log(res);
    setNews(res.data);
  }

  useEffect(() => {
    fetchNews();
  })

  return(
    <div className='news-bg py-3'>
      <Container>
      <Row>
      <h2 className='border-bottom-white text-white mb-3'>News</h2>
      </Row>
      <Row>
        {news.slice(0, 3).map(
          (story) => (
            <Col className='mb-2' sm='12' md='4'>
              <Card inverse style={{minHeight: "200px"}}>
                <CardImg src={story.image} alt={`${story.title} preview image`} />
                <CardImgOverlay className='news-overlay'>
                  <CardTitle className='news-text'>{story.title}</CardTitle>
                  <CardText className='news-text'>{story.summary}</CardText>
                  <CardText>
                    <small className="text-muted"><a href='#'>{story.author}</a></small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
          )
        )}
        </Row>
        <Row>
          {news.slice(3, 4).map(
            (story) => (
              <Col className='mb-2' sm='12' md='8'>
                <Card inverse style={{minHeight: "200px"}}>
                  <CardImg src={story.image} alt={`${story.title} preview image`} />
                    <CardImgOverlay className='news-overlay'>
                      <CardTitle className='news-text'>{story.title}</CardTitle>
                      <CardText className='news-text'>{story.summary}</CardText>
                      <CardText>
                        <small className="text-muted"><a href='#'>{story.author}</a></small>
                      </CardText>
                    </CardImgOverlay>
                  </Card>
                </Col>
              )
            )}
          <Col className='mb-2' sm='12' md='4'>
            <Row>
            {news.slice(4, 6).map(
              (story) => (
                <Col className='mb-2' sm='12'>
                  <Card inverse style={{minHeight: "200px"}}>
                    <CardImg src={story.image} alt={`${story.title} preview image`} />
                    <CardImgOverlay className='news-overlay'>
                      <CardTitle className='news-text'>{story.title}</CardTitle>
                      <CardText className='news-text'>{story.summary}</CardText>
                      <CardText>
                        <small className="text-muted"><a href='#'>{story.author}</a></small>
                      </CardText>
                    </CardImgOverlay>
                    </Card>
                </Col>
              )
            )}
          </Row>
        </Col>
      </Row>
      <Row>
      {news.slice(6, 8).map(
        (story) => (
          <Col className='mb-2' sm='12' md='6'>
            <Card inverse style={{minHeight: "200px"}}>
              <CardImg src={story.image} alt={`${story.title} preview image`} />
              <CardImgOverlay className='news-overlay'>
                <CardTitle className='news-text'>{story.title}</CardTitle>
                <CardText className='news-text'>{story.summary}</CardText>
                <CardText>
                  <small className="text-muted"><a href='#'>{story.author}</a></small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        )
      )}
      </Row>
    </Container>
  </div>
  )
}

export default News;
