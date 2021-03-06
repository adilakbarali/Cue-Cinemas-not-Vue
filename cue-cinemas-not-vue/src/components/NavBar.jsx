import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import logo from '../resources/logo.png'
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';


const NavBar = () => {
    
useEffect(() => {
  const timer = setTimeout(() => {
    document.getElementById("gsc-i-id1").setAttribute("placeholder", "Search Term")
    console.log("Testing")
  }, 250);
  return () => clearTimeout(timer);
}, [])


  return (
    <>
    <Helmet>
    <script async src="https://cse.google.com/cse.js?cx=0b2bafc8da13c0624"></script>
    </Helmet>
      <Navbar bg="blue" expand="lg">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand href="/">
              <img src={logo} width="100" height="100" alt="Cue Cinemas" />
              CueCinemasNotVue
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link href="#action1">Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="About Us" id="navbarScrollingDropdown">
                <LinkContainer to="/AboutUs">
                  <NavDropdown.Item href="#action2">About Us</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/ContactUs">
                  <NavDropdown.Item href="#action3">Contact Us</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/OpeningTimes">
                  <NavDropdown.Item href="#action4">Opening Times</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/ScreensPage">
                <NavDropdown.Item href="#action11">Screens</NavDropdown.Item>
                </LinkContainer>

              </NavDropdown>
              <NavDropdown title="Films" id="navbarScrollingDropdown">
                <LinkContainer to="/NewReleases">
                  <NavDropdown.Item href="#action5">New Releases</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/UpcomingReleases">
                  <NavDropdown.Item href="#action6">Upcoming Releases</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Bookings">
                  <NavDropdown.Item href="#action7">Ticket Bookings</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="Classification">
                  <NavDropdown.Item href="#action11">Classification</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="What's Going On?" id="navbarScrollingDropdown">
                <LinkContainer to="/FindUs">
                  <NavDropdown.Item href="#action8">Find Us</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/PlacesToGo">
                  <NavDropdown.Item href="#action9">Places to Go</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/DiscussionForum">
                  <NavDropdown.Item href="#action10">Discussion Board</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <div class="gcse-search"></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;