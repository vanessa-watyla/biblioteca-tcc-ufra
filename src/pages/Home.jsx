import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Card, Image } from 'react-bootstrap';
import { FaRegCalendarAlt, FaUserCircle, FaHeart } from 'react-icons/fa';
import Footer from './Footer';
import Cursos from './Cursos';
import NavBarHome from './NavbarHome';

const Home = () => {
  const items = [1, 2]; // Lista de itens
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (itemId) => {
    setLikedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId], // Alterna o estado do item específico
    }));
  };
  return (
    <div>
     <NavBarHome/>

      {/* Banner */}
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="overflow-hidden">
              <Card.Img
                src="src\pages\images\imagem-banner.png"
                alt="Novidades"
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-center">
                <h2 className="text-white">Novidades em breve</h2>
                <p className="text-white">Anote a data!</p>
                <Button variant="light">
                  <FaRegCalendarAlt className="me-2" />
                  00/00/0000
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="text-center mt-4">
       <Cursos/>
      </Container>


      <Container className="mt-4">
      {items.map((item) => (
        <Card key={item} className="mb-3">
          <Card.Body className="d-flex align-items-center">
            <Image src="src/pages/images/imagem-list.png" rounded className="me-3" />
            <div className="flex-grow-1">
              <Card.Title>List item {item}</Card.Title>
              <Card.Text className="text-muted">
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </Card.Text>
              <small className="text-muted">Autor</small>
            </div>
            {/* Ícone de coração com estado individual */}
            <FaHeart
              className={`heart-icon ${likedItems[item] ? "text-danger" : "text-muted"}`}
              onClick={() => toggleLike(item)}
              style={{ cursor: "pointer" }}
            />
          </Card.Body>
        </Card>
      ))}
    </Container>
      <Footer/>      
    </div>
  );
};

export default Home;
