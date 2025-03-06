import { Col, Container, Row } from "react-bootstrap";
import { PiCoffeeLight } from "react-icons/pi";
import { VscCoffee } from "react-icons/vsc";
import { GiTeapot } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import { GiSandwich } from "react-icons/gi";

const Menu = () => {
  

  return (
    <>
      <Container fluid className="w-75">
        <Row xs={2} className="mt-5">
          <Col>
            <h2><label className="cafelatte">CafeLatte</label> <br/><strong className="menu fw-bold"> MENU</strong></h2>
          </Col>
          <Col className="d-flex justify-content-center">
            <PiCoffeeLight size={125} opacity={0.8} />
          </Col>
          <Col className="text-decoration-underline"> 
            <h3 className="d-flex align-items-center"><VscCoffee className="me-2" size={35} />CAFÉ</h3>
          </Col>
        </Row>
        <div style={{height: '2px'}} className="bg-dark w-50"></div>
        <Row xs={1} md={2} className="mt-5">
          <Col className="d-flex justify-content-between">
            <h5>Espresso</h5>
            <p>3€</p>
          </Col>
            <Col className="d-flex justify-content-between">
                <h5>Americano</h5>
                <p>3.5€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Latte</h5>
                <p>4€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Cappuccino</h5>
                <p>4€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Macchiato</h5>
                <p>4€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Mocha</h5>
                <p>4€</p>
            </Col>
          </Row>
        <Row xs={1} md={2} className="mt-5">
            <Col className="text-decoration-underline">
                <h3 className="d-flex align-items-center"><GiTeapot className="me-2" size={35} />TÉ</h3>
            </Col>
        </Row>
        <div style={{height: '2px'}} className="bg-dark w-50"></div>
        <Row xs={1} md={2} className="mt-5">
            <Col className="d-flex justify-content-between">
                <h5>Green Tea</h5>
                <p>3€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Black Tea</h5>
                <p>3€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Chai Tea</h5>
                <p>3€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Herbal Tea</h5>
                <p>3€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Matcha</h5>
                <p>4€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Yerba Mate</h5>
                <p>4€</p>
            </Col>
        </Row>
        <Row xs={1} md={2} className="mt-5">
            <Col className="text-decoration-underline">
                <h3 className="d-flex align-items-center"><GiCakeSlice className="me-2" size={35} />DULCES</h3>
            </Col>
        </Row>
        <div style={{height: '2px'}} className="bg-dark w-50"></div>
        <Row xs={1} md={2} className="mt-5">
            <Col className="d-flex justify-content-between">
                <h5>Croissant</h5>
                <p>2€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Chocolate Croissant</h5>
                <p>2.5€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Almond Croissant</h5>
                <p>3€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Cinnamon Roll</h5>
                <p>3€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Blueberry Muffin</h5>
                <p>3€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Chocolate Muffin</h5>
                <p>3€</p>
            </Col>
            </Row>
        <Row xs={1} md={2} className="mt-5">
            <Col className="text-decoration-underline">
                <h3 className="d-flex align-items-center"><GiSandwich className="me-2" size={35} />SALADOS</h3>
            </Col>
        </Row>
        <div style={{height: '2px'}} className="bg-dark w-50"></div>
        <Row xs={1} md={2} className="mt-5">
            <Col className="d-flex justify-content-between">
                <h5>Ham & Cheese Croissant</h5>
                <p>4€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Spinach & Feta Croissant</h5>
                <p>4€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Tomato & Mozzarella Croissant</h5>
                <p>4€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Ham & Cheese Sandwich</h5>
                <p>4€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Chicken & Avocado Sandwich</h5>
                <p>4€</p>
            </Col>
            <Col className="d-flex justify-content-between">
                <h5>Salmon & Cream Cheese Sandwich</h5>
                <p>4€</p>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
