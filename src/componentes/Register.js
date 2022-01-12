import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from '../css/Register.module.css';

function Register(){

    return(

        <div className={styles.body}>
            <Container className={styles.register}>
                <Row>
                    <Col xs="12">
                        <Form className={styles.form}>

                        <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Nombre *</Form.Label>
                                    <Form.Control/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAddress2">
                                    <Form.Label>Apellidos *</Form.Label>
                                    <Form.Control/>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Teléfono *</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Correo electrónico *</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Contraseña *</Form.Label>
                                    <Form.Control type="password"/>
                                </Form.Group>
                            </Row>
                           
                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Ciudad *</Form.Label>
                                    <Form.Control/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCommunity">
                                    <Form.Label>Comunidad Autónoma *</Form.Label>
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

                                <Form.Group as={Col} controlId="formGridProvince">
                                    <Form.Label>Provincia *</Form.Label>
                                    <Form.Select defaultValue="Elige...">
                                        <option>Elige...</option>
                                        <optgroup label="Andalucía">
                                            <option>Almería</option>
                                            <option>Cádiz</option>
                                            <option>Cordoba</option>
                                            <option>Granada</option>
                                            <option>Huelva</option>
                                            <option>Jaén</option>
                                            <option>Málaga</option>
                                            <option>Sevilla</option>
                                        </optgroup>
                                        <optgroup label="Aragón">
                                            <option>Huesca</option>
                                            <option>Teruel</option>
                                            <option>Zaragoza</option>
                                        </optgroup>
                                        <option>Asturias</option>
                                        <option>Cantabria</option>
                                        <optgroup label="Castilla La Mancha">
                                            <option>Albacete</option>
                                            <option>Ciudad Real</option>
                                            <option>Cuenca</option>
                                            <option>Guadalajara</option>
                                            <option>Toledo</option>
                                        </optgroup>
                                        <optgroup label="Castilla y León">
                                            <option>Ávila</option>
                                            <option>Burgos</option>
                                            <option>León</option>
                                            <option>Palencia</option>
                                            <option>Salamanca</option>
                                            <option>Segovia</option>
                                            <option>Soria</option>
                                            <option>Valladolid</option>
                                            <option>Zamora</option>
                                        </optgroup>
                                        <optgroup label="Cataluña">
                                            <option>Barcelona</option>
                                            <option>Gerona</option>
                                            <option>Lérida</option>
                                            <option>Tarragona</option>
                                        </optgroup>
                                        <optgroup label="Extremadura">
                                            <option>Badajoz</option>
                                            <option>Cáceres</option>
                                        </optgroup>
                                        <optgroup label="Galicia">
                                            <option>La Coruña</option>
                                            <option>Lugo</option>
                                            <option>Orense</option>
                                            <option>Pontevedra</option>
                                        </optgroup>
                                        <option>Islas Baleares</option>
                                        <optgroup label="Canarias">
                                            <option>Las Palmas</option>
                                            <option>Santa Cruz de Tenerife</option>
                                        </optgroup>
                                        <option>La Rioja</option>
                                        <option>Madrid</option>
                                        <option>Murcia</option>
                                        <option>Navarra</option>
                                        <optgroup label="País Vasco">
                                            <option>Álava</option>
                                            <option>Guipúzcua</option>
                                            <option>Vizcaya</option>
                                        </optgroup>
                                        <optgroup label="Valencia">
                                            <option>Alicante</option>
                                            <option>Castellón</option>
                                            <option>Valencia</option>
                                        </optgroup>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPostalCode">
                                    <Form.Label>Código postal *</Form.Label>
                                    <Form.Control/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Text className="text-muted">
                                    <ul className={styles.list}>
                                        <li>Debes estar registrado para poder añadir y/o apuntarte a una excursión.</li>
                                        <li>Los campos que llevan el asterisco &#40;*&#41; son obligatorios.</li>
                                    </ul>
                                    </Form.Text>
                                </Form.Group>

                            </Row>
                            <div className={styles.btn}>
                                <Button variant="primary" type="submit">
                                    Regístrate
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;