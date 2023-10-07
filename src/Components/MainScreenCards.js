import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import FavoriteButton from './FavoriteButton';
import { useSelectFavorite } from '../Context/FavoriteRecipe';

function CardMainScreen() {
  const url = 'https://api.spoonacular.com/recipes/random?number=4';

  const [data, error] = useFetch(url);
  const { favorite, setFavorite } = useSelectFavorite();

  const saveFavorite = (id) => {
    if (!favorite.includes(id)) {
      setFavorite([...favorite, id]);
      localStorage.setItem(id, id);
    } else {
      setFavorite([...favorite.filter((filteredItem) => filteredItem !== id)]);
      localStorage.removeItem(id, id);
    }
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {data ? (
        data.recipes.map((item) => (
          <Card
            key={item.id}
            bg="light"
            text="black"
            style={{ width: '18rem', margin: '10px' }}
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Link to={`random-recipe/resource?id=${item.id}`}>
                <Card.Title>{item.title}</Card.Title>
              </Link>
              <Card.Text>Ready in {item.readyInMinutes} min</Card.Text>
              <div>
                <FavoriteButton
                  meal={item}
                  saveFavorite={saveFavorite}
                  favorite={favorite}
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

export default CardMainScreen;
