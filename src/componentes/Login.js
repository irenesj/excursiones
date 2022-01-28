import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from '../css/Login.module.css';
import {validateMail, validatePassword} from '../validation/validations.js'

function Login(){

    return(

        <div className={styles.body}>
            <Container className={styles.login}>
                <Row>
                    <Col xs="12">
                        <Form className={styles.form}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email"/>
                                <Form.Text className="text-muted">
                                    Nunca compartiremos tu correo con nadie.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password"/>
                            </Form.Group>
                            <div className={styles.btn}>
                            <Button variant="primary" type="submit">
                                Inicia sesión
                            </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;