import { Carousel } from 'react-bootstrap';
import banner1 from './banner1.webp'; // Importa las imágenes
import banner2 from './banner2.webp';
import banner3 from './banner3.webp';
import './carousel.css'; //

function CarouselFadeExample() {
  return (
    <Carousel className='custom-carousel'>
      <Carousel.Item>
        <img src={banner1} alt="First slide" className='custom-img' />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner2} alt="Second slide" className='custom-img' />
        <Carousel.Caption>
 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner3} alt="Third slide" className='custom-img' />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
