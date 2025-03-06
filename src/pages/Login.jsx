import React from 'react';
import { NavBarLogin } from './navbar/NavbarLogin';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/home"); 
  };
  return (
    <div>
    <NavBarLogin />
    <div className="login-page d-flex align-items-center justify-content-center vh-100" style={{ background: 'linear-gradient(to bottom, #ffffff, #a2d39c)' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <div className="p-4 bg-white shadow rounded">
              <h4 className="text-center mb-4">ACESSE A SUA CONTA</h4>
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>

                <Form.Group controlId="password" className="mt-3">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>

                <div className="text-end mt-2">
                  <a href="#" className="text-success">Esqueceu sua senha?</a>
                </div>

                <Button variant="success" className="w-100 mt-3"  onClick={handleLogin}>ENTRAR</Button>
              </Form>

              <div className="text-center mt-3">
                <span>Não tem conta? <a href="#" className="text-success fw-bold">Cadastre-se</a></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default Login;