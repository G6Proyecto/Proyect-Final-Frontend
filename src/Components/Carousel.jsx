import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from './CarouselFolder/banner1.jpg';
import banner2 from './CarouselFolder/banner2.jpg';
import banner3 from './CarouselFolder/banner3.jpg';
import "./Navbar/NavBar.css"

function CarouselFadeExample() {
  return (
    <Carousel className='w-100'>
      <Carousel.Item>
        <img src={banner1} alt="First slide" className='imgback' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Description for first slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner2} alt="Second slide" className='imgback' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Description for second slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner3} alt="Third slide" className='imgback' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Description for third slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
