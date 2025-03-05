import { Container, Row, Col } from "react-bootstrap";
import { GiCoffeeCup, GiCakeSlice, GiSandwich } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";

const Icons = () => (
  <Container fluid className="justify-content-center w-100 mt-4 mb-4">
    <Container fluid className="w-100">
      <Row xs={4} className="justify-content-between">
        <Col className="d-flex justify-content-center align-items-center">
          <GiCoffeeCup size={50} opacity={0.6} />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
            <CiCoffeeCup size={50} opacity={0.6} />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <GiCakeSlice size={50} opacity={0.6} />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <GiSandwich size={50} opacity={0.6} />
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Icons;
