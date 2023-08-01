import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link } from 'react-router-dom';


function NavigationBar() {

  const bgImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NreTLmoaAa3LkFy1to2YNAs2ZhldMR8mIA&usqp=CAU";



  return (
    <>
      {[false,].map((expand) => (
        <Navbar 
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "4vw, 12vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
         key={expand} expand={expand} className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
          <Container fluid>
          <Link className='nav-bar text-decoration-none fs-3  ' to="/">

          <h1 className=" fst-italic fst-bold  text-body-secondary text-center ms-5">EzyShope</h1>
          </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" bg="dark" data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title> */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
       <Link className='nav-link col-2 btn btn-outline-dark' to="/">Home</Link>
       <Link className='nav-link col-2 btn btn-outline-dark' to="/products">Products</Link>
       <Link className='nav-link col-2 btn btn-outline-secondary' to="/login">Login</Link>
       <Link className='nav-link col-2 btn btn-outline-secondary'  to="/signup">Signup</Link>
                 
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;





