import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import '../CSS/MainCarousel.css';

function MainCarousel() {
  return (
    <Container className="main-screen-carousel-container">
      <Carousel className="main-screen-carousel">
        <Carousel.Item className="main-screen-carousel-item">
          <img
            className="main-screen-carousel-img"
            src="../assets/pizza.jpg"
            alt="First slide"
          />
          <Carousel.Caption as={Link} to={'/search/pizza'}>
            <h2 className="main-screen-carousel-title">Pizza</h2>
            <p className="main-screen-carousel-paragraph h4">
              Pizza Passion: A Slice of Italy
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="main-screen-carousel-item">
          <img
            className="main-screen-carousel-img"
            src="../assets/pasta.jpg"
            alt="Second slide"
          />
          <Carousel.Caption as={Link} to={'/search/pasta'}>
            <h2 className="main-screen-carousel-title">Pasta</h2>
            <p className=" main-screen-carousel-paragraph h4">
              Italian Pasta Magic: A Gastronomic Exploration
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="main-screen-carousel-item">
          <img
            className="main-screen-carousel-img"
            src="../assets/meat.jpg"
            alt="Third slide"
          />
          <Carousel.Caption as={Link} to={'/search/steak'}>
            <h2 className="main-screen-carousel-title">Steak</h2>
            <p className="main-screen-carousel-paragraph h4">
              Discover the World of Steak Perfection
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default MainCarousel;
