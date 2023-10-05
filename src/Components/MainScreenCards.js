import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

function CardMainScreen() {
  const url = 'https://api.spoonacular.com/recipes/random?number=4';

  const [data, error] = useFetch(url);

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
          <Link to={`random-recipe/${item.id}`}>
            <Card
              key={item.id}
              border="light"
              bg="light"
              text="black"
              style={{ width: '18rem', margin: '10px' }}
            >
              <Card.Img
                variant="top"
                src={item.image}
                style={{ objectFit: 'contain' }}
              />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Ready in {item.readyInMinutes} min</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
}

export default CardMainScreen;
