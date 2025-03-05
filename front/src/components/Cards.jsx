import { Card, Col, Row } from "react-bootstrap";
import { motion } from "motion/react";

const Cards = () => {
  const cardsArray = [
    { id: 1, image: "card1.jpg", title: 'Mi titulo', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 2, image: "card2.jpg", title: 'Mi titulo', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' },
    { id: 3, image: "card3.jpg", title: 'Mi titulo', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' },
    { id: 4, image: "card4.jpg", title: 'Mi titulo', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' },
    { id: 5, image: "logo.jpg", title: 'Mi titulo', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' },
    { id: 6, image: 'card5.jpg', title: 'Mi titulo', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '}
    
  ];
  return (
    <>
    <div className="bg-white m-2 p-3 rounded">
    <h1 className="text-center mb-3">Nuestro Café de Especialidad</h1>
      <Row xs={1} sm={2} md={3} xl={4} className="g-4">
        {cardsArray.map((card) => (
          <motion.div whileHover={{scale: 1.1}}>
          <Col key={card.id}>
            <Card>
              <Card.Img className="cards" variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </motion.div>
        ))}
      </Row>
      </div>
    </>
  );
};

export default Cards;
