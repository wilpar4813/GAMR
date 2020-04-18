import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import api from '../utils/api';

const Upcoming = (props) => {

  const [ hasError, setErrors ] = useState(false);
  const [ recentReleased, setRecentReleased ] = useState([]);
  const [ comingSoon, setComingSoon ] = useState([]);
  const [ mostAnticipated, setMostAnticipated ] = useState([]);

  async function fetchReleased(){
    const res = await api.recentReleases();

    console.log(res);
    setRecentReleased(res.data);
  }

  useEffect(() => {
    fetchReleased();
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
              <h3 className='upcoming-subtile'>Recently Released</h3>
            </Row>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
          </Col>
          <Col sm='12' md='4'>
            <Row>
              <h3 className='upcoming-subtile'>Coming Soon</h3>
            </Row>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
          </Col>
          <Col sm='12' md='4'>
            <Row>
              <h3 className='upcoming-subtile'>Most Anticipated</h3>
            </Row>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
            <Media className='mb-3'>
              <Media left href="#">
                <Media className='mr-2' object src="https://via.placeholder.com/64x64.jpg" alt="Generic placeholder image" />
              </Media>
            <Media body>
              <Media heading>Game Title</Media>
              <small className='text-muted'>whatever amount of time here</small>
            </Media>
            </Media>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upcoming;
