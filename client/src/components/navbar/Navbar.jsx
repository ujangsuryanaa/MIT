import {Container, Nav, Navbar, NavDropdown, Row, Col, Stack} from 'react-bootstrap';
import Icon from '../../assets/icon.png';
import '../../App.css'

function NavbarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" className='fixed-top bgf'>
      <Container>
        <Navbar.Brand href="#home">
              <img src={Icon} alt='logo' />Mitra Inti Teknologi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#" className='fw-bold'>Home</Nav.Link>
          </Nav>
          <Nav>
          <Stack direction='horizontal' gap={5}>
            <Nav.Link href="#service" className='fw-bold'>Services</Nav.Link>
            <Nav.Link href="#contact"  style={{backgroundColor: "white", borderRadius:"10px"}} className='fw-bold'>
              Contact Us
            </Nav.Link>
          </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAuth;