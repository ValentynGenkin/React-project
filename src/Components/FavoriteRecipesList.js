import { useSelectFavorite } from '../Context/FavoriteRecipe';
import useFetch from '../Hooks/useFetch';
import { Container } from 'react-bootstrap';
import Title from './Title';
import Card from 'react-bootstrap/Card';
import LoadingSpinner from './LoadingSpinner';
import FavoriteButton from './FavoriteButton';
import { Link } from 'react-router-dom';

function FavoriteRecipesList() {
  const { favorite, setFavorite } = useSelectFavorite();
  // const [offset, setOffset] = useState(0);

  const idList = favorite.join(',');

  console.log(idList);
  const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${idList}&includeNutrition=false`;

  const [data, error] = useFetch(url);

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
    <Container>
      <Title text={'Favorite recipes'} />

      <Container
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {data ? (
          data.map((meal) => (
            <Card key={meal.id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={meal.image} />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Link to={`/favorite/resource?id=${meal.id}`}>
                  <Card.Title>{meal.title}</Card.Title>
                </Link>
                <Card.Text>Ready in {meal.readyInMinutes} min</Card.Text>
                <div>
                  <FavoriteButton
                    meal={meal}
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
    </Container>
  );
}

export default FavoriteRecipesList;
