import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function MainCarousel() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/pizza.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>First slide label</h2>
            <p className="h4">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/pasta.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>Second slide label</h2>
            <p className="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/meat.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>Third slide label</h2>
            <p className="h4">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default MainCarousel;
