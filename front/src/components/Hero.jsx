import { Container, Image } from "react-bootstrap";


const Hero = () => {
  return (
    <>
      <Container fluid className="position-relative">
        
        <Image className="rounded w-100 hero" src="hero.jpg" alt="" />
       
      </Container>
    </>
  );
};

export default Hero;
