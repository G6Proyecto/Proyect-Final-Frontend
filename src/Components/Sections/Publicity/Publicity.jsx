import banner1 from '../../CarouselFolder/banner1.webp';
import publicity1 from '../../Images/900w-KB4TX5Jf9I4.webp';
import publicity2 from '../../Images/publicity2.webp';
import publicity3 from '../../Images/pexels-olenkabohovyk-3819969.jpg';
import { Carousel } from 'react-bootstrap';


const Publicity = () => {
    return (
      <>
        <Carousel className="my-4 d-none d-md-block">
          <Carousel.Item interval={1000}>
            <img src={banner1} alt="First slide" className="imgback" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={banner1} alt="First slide" className="imgback" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={banner1} alt="First slide" className="imgback" />
          </Carousel.Item>
        </Carousel>

        <Carousel
          className="my-4 d-none d-md-block"
          style={{ height: "32.5em" }}
        >
          <Carousel.Item interval={1000}>
            <img src={publicity1} alt="First slide" className="imgback" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={publicity2} alt="First slide" className="imgback" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={publicity3} alt="First slide" className="imgback" />
          </Carousel.Item>
        </Carousel>
      </>
    );
};

export default Publicity;