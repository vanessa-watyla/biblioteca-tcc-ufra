import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

import logoAdministracao from "./images/logo-administracao.png";
import logoAgronomia from "./images/logo-agronomia.png";
import contabeis from "./images/logo-contabeis.png";
import florestal from "./images/logo-florestal.png";
import si from "./images/logo-si.png";
import zootecnia from "./images/logo-zootecnia.png";

const Cursos = () => {
  const navigate = useNavigate();

  const cursos = [
    { nome: "Administração", img: logoAdministracao, link: "/lista" },
    { nome: "Agronomia", img: logoAgronomia, link: "/lista" },
    { nome: "Ciências Contábeis", img: contabeis, link: "/lista" },
    { nome: "Engenharia Florestal", img: florestal, link: "/lista" },
    { nome: "Sistemas de Informação", img: si, link: "/lista" },
    { nome: "Zootecnia", img: zootecnia, link: "/lista" }
  ];

  return (
    <Container className="text-center mt-4">
      <Row className="justify-content-center">
        {cursos.map((curso, index) => (
          <Col key={index} xs={6} md={2} className="mb-3">
            <Image
              src={curso.img}
              alt={curso.nome}
              roundedCircle
              style={{ width: 80, height: 80, cursor: "pointer" }}
              onClick={() => navigate(curso.link)}
            />
            <p className="mt-2">{curso.nome}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cursos;
