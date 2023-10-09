import { Container } from 'react-bootstrap';
import { mealTypeData } from '../Data/mealTypeData';
import { cuisineData } from '../Data/cuisineData';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';

import '../CSS/MealTypeList.css';

function MealTypeList() {
  const { category } = useParams();
  let list;
  if (category === 'type') list = mealTypeData;
  if (category === 'cuisine') list = cuisineData;

  return (
    <Container className="meal-type-container">
      <div className="meal-type-list">
        {list.map((meal) => (
          <Button
            className="meal-type-list-button"
            key={meal}
            variant="secondary"
          >
            <Link
              to={`/meal-types/type/${meal}`}
              className="meal-type-list-button-link"
            >
              {meal}
            </Link>
          </Button>
        ))}
      </div>
    </Container>
  );
}

export default MealTypeList;
