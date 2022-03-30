import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const NavBar = () => {
  return (
    <>
      <Navbar bg="blue" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2022/03/smith.jpg?resize=696%2C398&ssl=1" width="100" height="100" alt="marty vs oscar" />
            CueCinemasNotVue
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <NavDropdown title="What to Watch" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Films</NavDropdown.Item>
                <NavDropdown.Item href="#action4">New Releases</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
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
    </>
  );
}

export default NavBar;