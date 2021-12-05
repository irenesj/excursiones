import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from '../css/Login.module.css';

function Login(){

    return(
        <Container>
            <Row>
                <Col xs="4">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Escribe tu correo electrónico" />
                            <Form.Text className="text-muted">
                                Nunca compartiremos tus datos con nadie.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Escribe tu contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Inicia sesión
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;