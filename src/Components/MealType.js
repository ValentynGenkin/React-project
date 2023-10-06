import { Container } from 'react-bootstrap';
import { mealTypeData } from '../Data/mealTypeData';
import { cuisineData } from '../Data/cuisineData';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

function MealType() {
  const { category } = useParams();
  let list;
  if (category === 'type') list = mealTypeData;
  if (category === 'cuisine') list = cuisineData;
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {list.map((meal) => (
          <Button
            key={meal}
            variant="secondary"
            className="d-flex justify-content-center align-items-center"
            href={`/meal-types/type/${meal}`}
            style={{
              width: '15rem',
              height: '6rem',
              padding: '20px',
              margin: '10px',
              flexGrow: 4,
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            {meal}
          </Button>
        ))}
      </div>
    </Container>
  );
}

export default MealType;
