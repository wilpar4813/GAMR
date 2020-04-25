import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { set } from 'mongoose';



const ScreenShots = (props) => {
  const [screenshotState, setscreenshotState] = useState({
    arrayURL : []
 
  });

  const [countState, setcountState] = useState(0)
  useEffect(() => {
    let display = 
    props.gameData != undefined ?  
   props.gameData.screenshots : '';
    console.log(display, "gameData Screenshots") 
  
    let items = props.gameData != undefined ? setscreenshotState({
      ...setscreenshotState, 
      arrayURL : props.gameData.screenshots
    })  
    
    
    : "";

     if(countState < screenshotState.arrayURL.length) {
       setscreenshotState({
         ...screenshotState,
         arrayURL : items
         
      });
    }
      console.log(screenshotState.arrayURL, "ArrayURL")
   
      
      setcountState(countState +1)
  }, [countState]) 



  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === screenshotState.arrayURL.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? screenshotState.arrayURL.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = screenshotState.arrayURL.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={screenshotState.arrayURL} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default ScreenShots;