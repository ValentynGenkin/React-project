import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { cuisineData } from '../Data/cuisineData';
import { mealTypeData } from '../Data/mealTypeData';

function Navigation() {
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href={'/'}>Recipes</Nav.Link>
            <NavDropdown title="Recipes by country" id="basic-nav-dropdown">
              <NavDropdown.Item href="/meal-types/cuisine">
                All category
              </NavDropdown.Item>
              {cuisineData.map((item) => (
                <NavDropdown.Item href={`/meal-types/cuisine/${item}`}>
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Recipes by type" id="basic-nav-dropdown">
              <NavDropdown.Item href={'/meal-types/type'}>
                All category
              </NavDropdown.Item>
              {mealTypeData.map((item) => (
                <NavDropdown.Item href={`/meal-types/type/${item}`}>
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
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
