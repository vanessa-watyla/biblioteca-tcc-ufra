import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import NavBarHome from './NavbarHome';
import Footer from './Footer';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState('');

  // Campos do formulário
  const [curso, setCurso] = useState('Administração');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [autor, setAutor] = useState('');

  // Estado para controlar o Toast
  const [showToast, setShowToast] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('pdfFile', selectedFile);
    formData.append('curso', curso);
    formData.append('titulo', titulo);
    formData.append('descricao', descricao);
    formData.append('autor', autor);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadedUrl(response.data.url);

      // Exibe o Toast de sucesso
      setShowToast(true);
    } catch (error) {
      setShowToast(true);
      console.error("Erro ao enviar o arquivo:", error);
    }
  };

  // Estilo para o fundo em degradê
  const backgroundStyle = {
    background: 'linear-gradient(to bottom, #ffffff, #60a960)',
    minHeight: '100vh',
    padding: '2rem 0'
  };

  return (
    <>
    <NavBarHome />
      <div style={backgroundStyle}>
        <Container>
          {/* ToastContainer no canto superior direito (pode alterar a posição se quiser) */}
          <ToastContainer position="top-end" className="p-3">
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={3000}
              autohide
              bg="success"
            >
              <Toast.Header>
                <strong className="me-auto">Envio Concluído</strong>
              </Toast.Header>
              <Toast.Body className="text-white">
                Seu arquivo foi enviado com sucesso!
              </Toast.Body>
            </Toast>
          </ToastContainer>

          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={5} className="bg-white p-4 rounded shadow">
              <h5 className="fw-bold mb-3">
                Compartilhe seu trabalho e enriqueça a comunidade acadêmica
              </h5>
              <p className="mb-4" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                Queremos conhecer o seu trabalho! Envie seu TCC, artigo ou pesquisa e ajude
                a inspirar novos estudos. Cada contribuição faz a diferença em nossa biblioteca
                e fortalece a rede de conhecimento. Participe e ajude a expandir o saber!
              </p>

              <Form>
                {/* Seletor de Curso */}
                <Form.Group className="mb-3" controlId="formCurso">
                  <Form.Label>Curso</Form.Label>
                  <Form.Select
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                  >
                    <option>Administração</option>
                    <option>Agronomia</option>
                    <option>Ciências Contábeis</option>
                    <option>Engenharia Florestal</option>
                    <option>Sistemas de Informação</option>
                    <option>Zootecnia</option>
                  </Form.Select>
                </Form.Group>

                {/* Título */}
                <Form.Group className="mb-3" controlId="formTitulo">
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)} />
                </Form.Group>

                {/* Descrição */}
                <Form.Group className="mb-3" controlId="formDescricao">
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Digite a descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)} />
                </Form.Group>

                {/* Autor */}
                <Form.Group className="mb-3" controlId="formAutor">
                  <Form.Label>Autor</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome do autor"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)} />
                </Form.Group>

                {/* Arquivo PDF */}
                <Form.Group className="mb-3" controlId="formPdfFile">
                  <Form.Label>Selecione o arquivo PDF</Form.Label>
                  <Form.Control
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange} />
                </Form.Group>

                {/* Botão de Enviar */}
                <div className="d-grid">
                  <Button variant="success" onClick={handleUpload}>
                    ENVIAR
                  </Button>
                </div>
              </Form>

              {/* Exibe link após upload */}
              {uploadedUrl && (
                <div className="mt-3">
                  <p>Arquivo enviado com sucesso! Acesse:</p>
                  <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
                    {uploadedUrl}
                  </a>
                </div>
              )}
            </Col>
          </Row>
        </Container>
        
      </div>
      <Footer/>
    </>
  );
};

export default FileUpload;
