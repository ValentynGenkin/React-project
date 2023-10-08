import { Container, Image } from 'react-bootstrap';
import Title from './Title';
import useFetch from '../Hooks/useFetch';
import LoadingSpinner from './LoadingSpinner';
import { useLocation } from 'react-router-dom';
import { useCurrentPage } from '../Context/CurrentPage';
import { useEffect } from 'react';

function SingleRecipe() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const page = searchParams.get('page');
  const offset = searchParams.get('offset');

  const { setCurrentPage } = useCurrentPage();
  useEffect(() => {
    setCurrentPage({
      page: parseInt(page),
      offset: parseInt(offset),
      savePosition: true,
    });
  }, []);

  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&limitLicense=true`;

  const [data, error] = useFetch(url);

  return (
    <Container>
      {data ? (
        <>
          <Title text={data.title} />
          <Image src={data.image} thumbnail />
          <p dangerouslySetInnerHTML={{ __html: data.summary }} />
          <p>{data.winePairing.pairingText}</p>
          <ul>
            {data.winePairing.pairedWines.map((item) => (
              <li>{item}</li>
            ))}
          </ul>

          <p>
            Full recipe instruction:{' '}
            <a href={data.sourceUrl}>{data.creditsText}</a>
          </p>
          <p className="h5">Ingredients:</p>
          <ul>
            {data.extendedIngredients.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
          <p className="h5">Preparation:</p>
          <p dangerouslySetInnerHTML={{ __html: data.instructions }} />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
}

export default SingleRecipe;
