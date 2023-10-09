import { useSelectFavorite } from '../Context/FavoriteRecipe';
import useFetch from '../Hooks/useFetch';
import { Container } from 'react-bootstrap';
import Title from './Title';
import Card from 'react-bootstrap/Card';
import LoadingSpinner from './LoadingSpinner';
import FavoriteButton from './FavoriteButton';
import { Link } from 'react-router-dom';

import '../CSS/FavoriteRecipesList.css';

function FavoriteRecipesList() {
  const { favorite, setFavorite } = useSelectFavorite();

  const idList = favorite.join(',');

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
    <Container className="favorite-list-container">
      <Title text={'Favorite recipes'} />

      <Container className="favorite-list-card-container">
        {data && data.length !== 0 ? (
          data ? (
            data.map((meal) => (
              <Card key={meal.id} className="favorite-list-card">
                <Card.Img variant="top" src={meal.image} />
                <Card.Body className="favorite-list-card-body">
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
          )
        ) : (
          <p className="h3">No saved recipes</p>
        )}
      </Container>
    </Container>
  );
}

export default FavoriteRecipesList;
