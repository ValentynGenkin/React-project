import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useCurrentPage } from '../Context/CurrentPage';

import '../CSS/MainScreenLinks.css';

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
      onClick={() => {
        clearPosition();
      }}
    >
      <Card className="main-screen-card">
        <Card.Body className="main-screen-card-body">
          <Card.Text className="h3">{text}</Card.Text>
        </Card.Body>
        <Card.Img
          className="main-screen-card-img"
          variant="button"
          src={imgUrl}
        />
      </Card>
    </Link>
  );
}

export default MainScreenLinks;
