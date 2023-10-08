import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import LoadingSpinner from './LoadingSpinner';
import Title from './Title';
import PaginationComponent from './Pagination';
import { useEffect } from 'react';
import FavoriteButton from './FavoriteButton';
import { useSelectFavorite } from '../Context/FavoriteRecipe';
import { useCurrentPage } from '../Context/CurrentPage';

function RecipeList() {
  const { favorite, setFavorite } = useSelectFavorite();
  const { currentPage, setCurrentPage } = useCurrentPage();
  const { meal_type, category } = useParams();

  useEffect(() => {
    currentPage.savePosition &&
      setCurrentPage({
        page: currentPage.page,
        offset: currentPage.offset,
      });
  }, [
    currentPage.offset,
    currentPage.page,
    currentPage.savePosition,
    setCurrentPage,
  ]);

  const url = `https://api.spoonacular.com/recipes/complexSearch?number=20&offset=${currentPage.offset}&${category}=${meal_type}`;

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
                  to={`/meal-types/${category}/${meal_type}/resource?id=${meal.id}&page=${currentPage.page}&offset=${currentPage.offset}`}
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
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        ) : (
          ''
        ))}
    </Container>
  );
}
export default RecipeList;
