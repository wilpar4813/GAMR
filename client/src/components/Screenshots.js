import React, {useState, useEffect} from 'react';
import {Container, Row, Col,  Carousel, CarouselItem, CarouselControl,} from 'reactstrap';


const Screenshots = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.screenShots.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.screenShots.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  function getSlides() {
    return props.screenShots ? (
    props.screenShots.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img src={item.url} />
      </CarouselItem>
    );
  })
) : [];
}

  return (
    <>
      {!props.screenShots ? <div>Loading...</div> : (
    <Container className='bg-black'>
      <Row>
        <Col sm="12" md={{ size: 10, offset: 1 }}>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            {getSlides()}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}
</>
)
}

export default Screenshots;
