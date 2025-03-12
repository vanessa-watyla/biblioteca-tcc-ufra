import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import Footer from "./Footer";
import NavBarHome from "./NavbarHome";
import Cursos from "./Cursos";

const CourseDetail = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    {
      id: 1,
      title: "PROJETO DO TCC EM SISTEMAS DE INFORMAÇÃO",
      text: "… Assim sendo, o documento final do Projeto de TCC deverá conter a … TCC de modo que o mesmo seja plenamente escrito e implementado na disciplina TCC em Sistemas de Informação",
      author: "LUCIANA DO AMARAL TEIXEIRA",
      date: "Publicado em: 04/09/2023",
      link: "https://biblioteca-tcc-pds.s3.us-east-2.amazonaws.com/1741814659397_Data+Firewalls.pdf" 
    },
    {
      id: 2,
      title: "Modelo de Grãos",
      text: "Treinamento de IA.",
      author: "Autor",
      date: "Publicado em: 05/09/2023",
      link: "https://biblioteca-tcc-pds.s3.us-east-2.amazonaws.com/1741219901067_modelo-gr%C3%83%C2%A3os.pdf"
    },
    {
      id: 3,
      title: "List item",
      text: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      author: "Autor",
      date: "Publicado em: 05/09/2023",
      link: "https://biblioteca-tcc-pds.s3.us-east-2.amazonaws.com/10+Livro+Projeto+de+TCC+(1).pdf"
    },
    {
      id: 4,
      title: "List item",
      text: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      author: "Autor",
      date: "Publicado em: 05/09/2023",
      link: "https://biblioteca-tcc-pds.s3.us-east-2.amazonaws.com/10+Livro+Projeto+de+TCC+(1).pdf"
    },
    {
      id: 5,
      title: "List item",
      text: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      author: "Autor",
      date: "Publicado em: 05/09/2023",
      link: "https://biblioteca-tcc-pds.s3.us-east-2.amazonaws.com/10+Livro+Projeto+de+TCC+(1).pdf"
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShare = async (link) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Compartilhar PDF',
          text: 'Confira este PDF:',
          url: link,
        });
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      navigator.clipboard.writeText(link);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBarHome />
      <Container className="my-4 flex-grow-1">
        <h3 className="mb-4">{Cursos.nome}</h3>

        <Form.Group className="mb-4">
          <Form.Control
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>

        {filteredItems.map((item) => (
          <Card key={item.id} className="mb-3">
            <Card.Body>
              <Row>
                <Col xs={2} md={1}>
                  <Image
                    src="src/pages/images/imagem-list.png"
                    alt="Item"
                    rounded
                  />
                </Col>
                <Col xs={10} md={11}>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to={item.link} className="text-decoration-none">
                      <Card.Title className="text-success">
                        {item.title}
                      </Card.Title>
                    </Link>
                    <Button variant="link" onClick={() => handleShare(item.link)}>
                      <FaShareAlt size={20} />
                    </Button>
                  </div>
                  <Card.Text className="text-muted">
                    {item.text}
                  </Card.Text>
                  <div className="text-muted">
                    <small>{item.author}</small>
                    <br />
                    <small>{item.date}</small>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default CourseDetail;
