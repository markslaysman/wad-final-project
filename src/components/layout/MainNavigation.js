//REACT imports
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function MainNavigation() {
    return (
        <Navbar bg="light" expand="sm">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Mark D. Slaysman</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/housescrud">Houses-CRUD</Nav.Link>
                        <Nav.Link as={Link} to="/moviereview">Moview Review</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavigation;