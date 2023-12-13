import React, { useState } from 'react';
import {
  Carousel as BoostrapCarousel,
  CarouselItem,
  CarouselControl,
  Row,
  Col
} from 'reactstrap';
import {carouselItems as items} from '../../utils/data'

export default function Carousel() {


  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) 
    return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
      className='carouselItem'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src}
         alt={item.altText}
         className='w-100 slideImg'
         style={{objectFit:'cover'}}/>
      </CarouselItem>
    );
  });

  return (
    <Row style={{paddingTop:'55px'}}>
    <Col md='12' className='my-1'>
    <BoostrapCarousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className='w-100'
      data-testid='carousel'
      
    >
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        data-testid="previous-button" 
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next} 
        data-testid="next-button" 
      />
    </BoostrapCarousel>
    </Col>
    </Row>
  )
}
