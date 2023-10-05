import { Container } from 'react-bootstrap';
import { mealTypeData } from '../Data/mealTypeData';
import Button from 'react-bootstrap/Button';

function MealType() {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {mealTypeData.map((meal) => (
          <Button
            key={meal}
            variant="secondary"
            className="d-flex justify-content-center align-items-center"
            href={`meal-types/${meal}`}
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
