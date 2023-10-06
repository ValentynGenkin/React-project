import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { cuisineData } from '../Data/cuisineData';
import { mealTypeData } from '../Data/mealTypeData';
import Badge from 'react-bootstrap/Badge';
import { useSelectFavorite } from '../Context/FavoriteRecipe';
import { Link } from 'react-router-dom';

function Navigation() {
  const { favorite } = useSelectFavorite();

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">React Project HYF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Recipes
            </Nav.Link>
            <NavDropdown title="Recipes by country" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/meal-types/cuisine">
                All category
              </NavDropdown.Item>
              {cuisineData.map((item) => (
                <NavDropdown.Item
                  as={Link}
                  to={`/meal-types/cuisine/${item}`}
                  key={item}
                >
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Recipes by type" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/meal-types/type">
                All category
              </NavDropdown.Item>
              {mealTypeData.map((item) => (
                <NavDropdown.Item
                  as={Link}
                  to={`/meal-types/type/${item}`}
                  key={item}
                >
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to="/" style={{ whiteSpace: 'nowrap' }}>
              {'Favorite '}
              <Badge bg="success" className="m-1">
                {favorite.length}
              </Badge>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
