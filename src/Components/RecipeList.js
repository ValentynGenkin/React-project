import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import LoadingSpinner from './LoadingSpinner';
import Title from './Title';
import PaginationComponent from './Pagination';
import { useEffect, useState } from 'react';
import FavoriteButton from './FavoriteButton';
import { useSelectFavorite } from '../Context/FavoriteRecipe';

function RecipeList() {
  const { favorite, setFavorite } = useSelectFavorite();
  const { meal_type, category } = useParams();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(0);
  }, [meal_type]);

  const url = `https://api.spoonacular.com/recipes/complexSearch?number=20&offset=${offset}&${category}=${meal_type}`;

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

  const totalPages =
    data && Math.floor(data.totalResults / 20) <= 45
      ? Math.floor(data.totalResults / 20)
      : 45;

  return (
    <Container>
      <Title text={meal_type} />

      <Container
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {data ? (
          data.results.map((meal) => (
            <Card key={meal.id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={meal.image} />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Link
                  to={`/meal-types/${category}/${meal_type}/resource?id=${meal.id}`}
                >
                  <Card.Title>{meal.title}</Card.Title>
                </Link>
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
      {data &&
        (totalPages >= 1 ? (
          <PaginationComponent
            pages={totalPages}
            setOffset={setOffset}
            meal_type={meal_type}
          />
        ) : (
          ''
        ))}
    </Container>
  );
}
export default RecipeList;
