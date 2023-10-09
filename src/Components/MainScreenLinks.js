import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useCurrentPage } from '../Context/CurrentPage';

function MainScreenLinks({ imgUrl, text }) {
  const urlPoint = text.replace(' cuisine', '');
  const { setCurrentPage } = useCurrentPage();

  const clearPosition = () => {
    setCurrentPage({
      page: 1,
      offset: 0,
      savePosition: false,
    });
  };

  return (
    <Link
      to={`/meal-types/cuisine/${urlPoint}`}
      style={{ textDecoration: 'none' }}
      onClick={() => {
        clearPosition();
      }}
    >
      <Card style={{ margin: '15px 0' }}>
        <Card.Body style={{ display: 'flex' }}>
          <Card.Text className="h3">{text}</Card.Text>
        </Card.Body>
        <Card.Img
          variant="button"
          src={imgUrl}
          style={{ height: '10rem', width: '100%', objectFit: 'cover' }}
        />
      </Card>
    </Link>
  );
}

export default MainScreenLinks;
