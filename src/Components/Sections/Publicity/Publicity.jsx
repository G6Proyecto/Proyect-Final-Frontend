import banner1 from '../../CarouselFolder/banner1.jpg';
import { Carousel } from 'react-bootstrap';

const Publicity = () => {
    return (
        <Carousel 
        className='my-4'
        >
        <Carousel.Item interval={1000}>
        <img src={banner1} alt="First slide" className='imgback' />
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img src={banner1} alt="First slide" className='imgback' />
        </Carousel.Item>
        <Carousel.Item>
        <img src={banner1} alt="First slide" className='imgback' />
        </Carousel.Item>
      </Carousel>
    );
};

export default Publicity;