import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MainScreenLinks({ imgUrl, text }) {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
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
