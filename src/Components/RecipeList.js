import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import LoadingSpinner from './LoadingSpinner';
import Title from './Title';
import PaginationComponent from './Pagination';
import { useState } from 'react';

function RecipeList() {
  const { meal_type } = useParams();

  const [offset, setOffset] = useState(0);
  const url = `https://api.spoonacular.com/recipes/complexSearch?number=20&offset=${offset}&type=${meal_type}`;

  const [data, error] = useFetch(url);

  return (
    <Container>
      <Title text={meal_type} />
      {data ? (
        <PaginationComponent
          pages={Math.floor(data.totalResults / 20)}
          setOffset={setOffset}
        />
      ) : (
        <LoadingSpinner />
      )}
      <Container
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {data ? (
          data.results.map((meal) => (
            <Card key={meal.id} style={{ width: '14rem', margin: '10px' }}>
              <Card.Img variant="top" src={meal.image} />
              <Card.Body>
                <Card.Title>{meal.title}</Card.Title>
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
export default RecipeList;
