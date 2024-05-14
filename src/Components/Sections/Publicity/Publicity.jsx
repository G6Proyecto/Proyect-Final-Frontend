import pub1 from '../../Images/pub1.jpg';
import pub2 from '../../Images/pub2.jpg';
import pub3 from '../../Images/pub3.jpg';
import { Carousel } from 'react-bootstrap';

const Publicity = () => {
    return (
        <Carousel 
        className='my-4 d-sm-none d-md-block'
        >
        <Carousel.Item interval={1000}>
        <img src={pub1} alt="First slide" className='imgback' />
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img src={pub2} alt="First slide" className='imgback' />
        </Carousel.Item>
        <Carousel.Item>
        <img src={pub3} alt="First slide" className='imgback' />
        </Carousel.Item>
      </Carousel>
    );
};

export default Publicity;