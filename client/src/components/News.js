import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import api from '../utils/api';

const News = (props) => {

  const [ news, setNews ] = useState([]);

  async function fetchNews(){
    const res = await api.recentNews();

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
                <Card inverse>
                  <CardImg width="100%" src={story.image} alt="Card image cap" />
                  <CardImgOverlay>
                    <CardTitle>{story.title}</CardTitle>
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
          {news.slice(4).map(
            (story) => (
              <Col className='mb-2' sm='12' md='8'>
                <Card inverse>
                  <CardImg width="100%" src={story.image} alt="Card image cap" />
                    <CardImgOverlay>
                      <CardTitle>{story.title}</CardTitle>
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
            {news.slice(5, 7).map(
              (story) => (
                <Col className='mb-2' sm='12' md='4'>
                  <Card inverse>
                    <CardImg width="100%" src={story.image} alt="Card image cap" />
                    <CardImgOverlay>
                      <CardTitle>{story.title}</CardTitle>
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
      {news.slice(7, 9).map(
        (story) => (
          <Col className='mb-2' sm='12' md='6'>
            <Card inverse>
              <CardImg width="100%" src={story.image} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>{story.title}</CardTitle>
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
