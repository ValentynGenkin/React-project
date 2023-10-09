import { Button, Container, Image } from 'react-bootstrap';
import Title from './Title';
import useFetch from '../Hooks/useFetch';
import LoadingSpinner from './LoadingSpinner';
import { useLocation } from 'react-router-dom';
import { useCurrentPage } from '../Context/CurrentPage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SingleRecipe() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const page = searchParams.get('page') ? searchParams.get('page') : 1;
  const offset = searchParams.get('offset') ? searchParams.get('offset') : 0;

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
    <Container style={{ minHeight: 'calc(100vh - 95px)' }}>
      <Button
        variant="outline-success"
        style={{ float: 'right', margin: '20px' }}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
      {data ? (
        <div key={data.id}>
          <Title text={data.title} />
          <Image src={data.image} thumbnail />
          <p dangerouslySetInnerHTML={{ __html: data.summary }} />
          {data.winePairing.pairingText && (
            <div>
              <p>{data.winePairing.pairingText}</p>
              <ul>
                {data.winePairing.pairedWines.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          <p>
            Full recipe instruction:{' '}
            <a href={data.sourceUrl}>{data.creditsText}</a>
          </p>
          <p className="h5">Ingredients:</p>
          <ul>
            {data.extendedIngredients.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <p className="h5">Preparation:</p>
          <p dangerouslySetInnerHTML={{ __html: data.instructions }} />
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
}

export default SingleRecipe;
