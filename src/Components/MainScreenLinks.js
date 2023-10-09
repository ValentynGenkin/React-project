import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useCurrentPage } from '../Context/CurrentPage';
import { clearPosition } from '../JSFunction/clearPosition';

import '../CSS/MainScreenLinks.css';

function MainScreenLinks({ imgUrl, text }) {
  const urlPoint = text.replace(' cuisine', '');
  const { setCurrentPage } = useCurrentPage();

  return (
    <Link
      to={`/meal-types/cuisine/${urlPoint}`}
      onClick={() => {
        clearPosition(setCurrentPage);
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
