import { useSelectFavorite } from '../Context/FavoriteRecipe';
import useFetch from '../Hooks/useFetch';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Title from './Title';
import Card from 'react-bootstrap/Card';
import PaginationComponent from './Pagination';
import LoadingSpinner from './LoadingSpinner';
import FavoriteButton from './FavoriteButton';

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
    } else {
      setFavorite([...favorite.filter((filteredItem) => filteredItem !== id)]);
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
            <Card key={meal.id} style={{ width: '14rem', margin: '10px' }}>
              <Card.Img variant="top" src={meal.image} />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Card.Title>{meal.title}</Card.Title>
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
      {/* {data ? (
        <PaginationComponent
          pages={
            Math.floor(data.totalResults / 20) <= 45
              ? Math.floor(data.totalResults / 20)
              : 45
          }
          setOffset={setOffset}
        />
      ) : (
        <LoadingSpinner />
      )} */}
    </Container>
  );
}

export default FavoriteRecipesList;
