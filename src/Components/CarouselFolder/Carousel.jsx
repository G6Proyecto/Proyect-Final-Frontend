
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../CarouselFolder/banner1.webp';
import banner2 from '../CarouselFolder/banner2.webp';
import banner3 from '../CarouselFolder/banner3.webp';
import "../Navbar/NavBar.css"

function CarouselFadeExample() {
  return (
    <Carousel className=''>
      <Carousel.Item>
        <img src={banner1} alt="First slide" className='imgback' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner2} alt="Second slide" className='imgback' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner3} alt="Third slide" className='imgback' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
