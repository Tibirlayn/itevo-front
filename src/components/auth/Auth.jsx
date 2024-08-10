import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './css/Auth.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoAuth from '../../img/logo-auth.png';
import { LoginRequest } from './proto/login_pb';
import { AuthServiceClient } from './proto/login_grpc_web_pb';

export function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Настройка клиента для gRPC
    const client = new AuthServiceClient('http://localhost:50051');

    // Создание запроса
    const request = new LoginRequest();
    request.setNphone(email);
    request.setPassword(password);
    request.setAppId(1); // Установите app_id

    // Отправка запроса
    client.login(request, {}, (err, response) => {
      if (err) {
        setError('An error occurred. Please try again later.');
        console.error(err);
        return;
      }

      // Получение ответа
      const token = response.getToken();
      if (token) {
        alert('Successfully logged in! Token: ' + token);
        // Реализуйте здесь логику после успешной авторизации (например, перенаправление)
      } else {
        setError('Invalid email or password');
      }
    });
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 custom-bg-black-auth">
      <Row className="w-100">
        <Col xs={12} md={6} lg={3} className="mx-auto">
          <div className="p-4 custom-bg-gray-auth rounded">
            <div className="text-center mb-4">
              <Image
                src={LogoAuth}
                alt="Logo"
                className="mb-4"
                style={{ width: '150px', height: '150px' }}
                roundedCircle
              />
              <h4 className="text-white">WELCOME</h4>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  ENTER
                </Button>
              </div>
            </Form>
            <div className="text-center mt-3">
              <a href="#" className="text-white">Sign up</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
