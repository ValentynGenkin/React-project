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
import { saveFavorite } from '../JSFunction/saveFavorite';
import '../CSS/RecipeList.css';

function RecipeList() {
  const { favorite, setFavorite } = useSelectFavorite();
  const { currentPage, setCurrentPage } = useCurrentPage();
  const { meal_type, category, input } = useParams();

  useEffect(() => {
    setCurrentPage({
      page: currentPage.page,
      offset: currentPage.offset,
      savePosition: false,
    });
  }, [currentPage.offset, currentPage.page, setCurrentPage]);

  const url = input
    ? `https://api.spoonacular.com/recipes/complexSearch?query=${input}&number=20&offset=${currentPage.offset}`
    : `https://api.spoonacular.com/recipes/complexSearch?number=20&offset=${currentPage.offset}&${category}=${meal_type}`;

  const [data] = useFetch(url);

  const totalPages =
    data && Math.ceil(data.totalResults / 20) <= 45
      ? Math.ceil(data.totalResults / 20)
      : 45;

  return (
    <Container className="recipe-list-container">
      {data && data.totalResults === 0 ? (
        <p className="h3">{`No matches found: ${input}`} </p>
      ) : (
        <>
          <Title text={input ? input : meal_type} />
          {data &&
            (totalPages > 1 ? (
              <PaginationComponent
                pages={totalPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            ) : (
              ''
            ))}

          <Container className="recipe-list-card-container">
            {data ? (
              data.results.map((meal) => (
                <Card className="recipe-list-card" key={meal.id}>
                  <Card.Img variant="top" src={meal.image} />
                  <Card.Body className="recipe-list-card-body">
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
                        setFavorite={setFavorite}
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
            (totalPages > 1 ? (
              <PaginationComponent
                pages={totalPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                data={data}
              />
            ) : (
              ''
            ))}
        </>
      )}
    </Container>
  );
}
export default RecipeList;
