import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1} height="400px" width="200 px"
          alt=""
        />
        <Carousel.Caption>
          <h3>React</h3>
          <p>the future of web applications</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2} height="400px" width="200 px"
          alt=""
        />
         <Carousel.Caption>
            <h3>React</h3>
            <p>the future of web applications</p>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3} height="400px" width="200 px"
          alt=""
        />

        <Carousel.Caption>
          <h3>React</h3>
          <p>
          the future of web applications
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;