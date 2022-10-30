import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function NavbarView() {
  return (
    <>
      
      <Navbar bg="primary" variant="dark" className='p-4'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
      </Container>
    </Navbar>

      

      
    </>
  );
}

export default NavbarView; 