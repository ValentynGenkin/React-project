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
import { useCurrentPage } from '../Context/CurrentPage';
import { useState } from 'react';
import { clearPosition } from '../JSFunction/clearPosition';

function Navigation() {
  const { favorite } = useSelectFavorite();
  const { setCurrentPage } = useCurrentPage();
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    const inputData = e.target.value;
    setSearchInput(inputData);
  };

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          React Project HYF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Recipes by country" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/meal-types/cuisine"
                onClick={() => {
                  clearPosition(setCurrentPage);
                }}
              >
                All category
              </NavDropdown.Item>
              {cuisineData.map((item) => (
                <NavDropdown.Item
                  as={Link}
                  to={`/meal-types/cuisine/${item}`}
                  key={item}
                  onClick={() => {
                    clearPosition(setCurrentPage);
                  }}
                >
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Recipes by type" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/meal-types/type"
                onClick={() => {
                  clearPosition(setCurrentPage);
                }}
              >
                All category
              </NavDropdown.Item>
              {mealTypeData.map((item) => (
                <NavDropdown.Item
                  as={Link}
                  to={`/meal-types/type/${item}`}
                  key={item}
                  onClick={() => {
                    clearPosition(setCurrentPage);
                  }}
                >
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to="/favorite" style={{ whiteSpace: 'nowrap' }}>
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
              onChange={handleInputChange}
            />
            <Link to={`/search/${searchInput}`}>
              <Button
                variant="outline-success"
                onClick={() => {
                  clearPosition(setCurrentPage);
                }}
              >
                Search
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
