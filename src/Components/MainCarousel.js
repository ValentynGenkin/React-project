import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

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
          <Carousel.Caption as={Link} to={'/search/pizza'}>
            <h2>Pizza</h2>
            <p className="h4">Pizza Passion: A Slice of Italy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/pasta.jpg"
            alt="Second slide"
          />
          <Carousel.Caption as={Link} to={'/search/pasta'}>
            <h2>Pasta</h2>
            <p className="h4">Italian Pasta Magic: A Gastronomic Exploration</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/meat.jpg"
            alt="Third slide"
          />
          <Carousel.Caption as={Link} to={'/search/steak'}>
            <h2>Steak</h2>
            <p className="h4">Discover the World of Steak Perfection</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default MainCarousel;
