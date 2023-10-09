import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import FavoriteButton from './FavoriteButton';
import { useSelectFavorite } from '../Context/FavoriteRecipe';
import { saveFavorite } from '../JSFunction/saveFavorite';

import '../CSS/MainScreenRandomCards.css';

function MainScreenRandomCards() {
  const url = 'https://api.spoonacular.com/recipes/random?number=4';

  const [data] = useFetch(url);
  const { favorite, setFavorite } = useSelectFavorite();

  return (
    <Container className="main-screen-random-card-container">
      {data ? (
        data.recipes.map((item) => (
          <Card key={item.id} bg="light" className="main-screen-random-card">
            <Card.Img variant="top" src={item.image} />
            <Card.Body className="main-screen-random-card-body">
              <Link to={`random-recipe/resource?id=${item.id}`}>
                <Card.Title>{item.title}</Card.Title>
              </Link>
              <Card.Text>Ready in {item.readyInMinutes} min</Card.Text>
              <div>
                <FavoriteButton
                  meal={item}
                  saveFavorite={saveFavorite}
                  favorite={favorite}
                  setFavorite={setFavorite}
                />
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
}

export default MainScreenRandomCards;
