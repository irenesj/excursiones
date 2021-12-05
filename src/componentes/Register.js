import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Register(){

    return(

        <Container>
            <Row>
                <Col>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Escribe tu correo electrónico" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Escribe tu contraseña" />
                            </Form.Group>
                        </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Calle</Form.Label>
                                <Form.Control placeholder="Calle" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Número o piso</Form.Label>
                                <Form.Control placeholder="Número" />
                            </Form.Group>

                        <Row className="mb-3">

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Comunidad Autónoma</Form.Label>
                                <Form.Select defaultValue="Elige...">
                                    <option>Elige...</option>
                                    <option>Andalucía</option>
                                    <option>Aragón</option>
                                    <option>Asturias</option>
                                    <option>Cantabria</option>
                                    <option>Castilla La Mancha</option>
                                    <option>Castilla y León</option>
                                    <option>Cataluña</option>
                                    <option>Extremadura</option>
                                    <option>Galicia</option>
                                    <option>Islas Baleares</option>
                                    <option>Canarias</option>
                                    <option>La Rioja</option>
                                    <option>Madrid</option>
                                    <option>Murcia</option>
                                    <option>Navarra</option>
                                    <option>País Vasco</option>
                                    <option>Valencia</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Select defaultValue="Elige...">
                                    <option>Elige...</option>
                                    <option>Andalucía</option>
                                    <option>Aragón</option>
                                    <option>Asturias</option>
                                    <option>Cantabria</option>
                                    <option>Castilla La Mancha</option>
                                    <option>Castilla y León</option>
                                    <option>Cataluña</option>
                                    <option>Extremadura</option>
                                    <option>Galicia</option>
                                    <option>Islas Baleares</option>
                                    <option>Canarias</option>
                                    <option>La Rioja</option>
                                    <option>Madrid</option>
                                    <option>Murcia</option>
                                    <option>Navarra</option>
                                    <option>País Vasco</option>
                                    <option>Valencia</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Código postal</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Regístrate
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;