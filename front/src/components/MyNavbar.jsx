import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="md">
      <Container fluid className="justify-content-between">
        <Link to={'/'}>
          <Image
            width={60}
            className="navbar-brand"
            src="logo.jpg"
            alt="Logo"
          />
        </Link>
        <Navbar.Toggle className="bg-white" aria-controls="navbar" />

        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <Link to={'/menu'} className="fw-bold btn" aria-current="page">
              MENU
            </Link>
            <Link to={'/reseñas'} className="fw-bold btn">
              RESEÑAS
            </Link>
            <Link to={'/contacto'} className="fw-bold btn">
              CONTACTO
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <Link to={"/login"} className="btn fw-bold">
              LOGIN
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
