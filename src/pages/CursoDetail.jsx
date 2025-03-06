import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBarHome from "./NavbarHome";
import Cursos from "./Cursos";

const CourseDetail = () => {

  const items = [
    {
      id: 1,
      title: "PROJETO DO TCC EM SISTEMAS DE INFORMAÇÃO",
      text: "… Assim sendo, o documento final do Projeto de TCC deverá conter a … TCC de modo que o mesmo seja plenamente escrito e implementado na disciplina TCC em Sistemas de Informação",
      author: "LUCIANA DO AMARAL TEIXEIRA",
      date: "Publicado em: 04/09/2023",
      link: "https://biblioteca-tcc-pds.s3.us-east-2.amazonaws.com/10+Livro+Projeto+de+TCC+(1).pdf" 
    },
    {
      id: 2,
      title: "Modelo de Grãos",
      text: "Treinamneto de IA.",
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

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBarHome/>
      <Container className="my-4 flex-grow-1">
        <h3 className="mb-4">{Cursos.nome}</h3>
        
        {items.map((item) => (
          <Card key={item.id} className="mb-3">
            <Card.Body>
              <Row>
                {/* Imagem do item */}
                <Col xs={2} md={1}>
                  <Image
                    src="src\pages\images\imagem-list.png" // Ajuste para o seu caminho
                    alt="Item"
                    rounded
                  />
                </Col>

                {/* Conteúdo do item */}
                <Col xs={10} md={11}>
                  {/* Título com link */}
                  <Link to={item.link} className="text-decoration-none">
                    <Card.Title className="text-success">{item.title}</Card.Title>
                  </Link>
                  <Card.Text className="text-muted">{item.text}</Card.Text>
                  <div className="text-muted">
                    <small>{item.author}</small><br />
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
