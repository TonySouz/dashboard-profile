import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <div>
      <h2 className="mb-4">Contato</h2>
      <Card className="shadow-sm p-4">
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Digite sua mensagem" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;