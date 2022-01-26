import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from '../css/Register.module.css';

function Register(){

    const nameChange = (event) => {
 
       if(event.target.value !== ""){
       
       }
    
    }

    const surnameChange = (event) => {

        if(event.target.value !== ""){
        }

    }

    const phoneChange = (event) => {

        const validPhoneNumber = / /;

        if(validPhoneNumber.test(event.target.value)){

        }

    }

    const mailChange = (event) => {

        const validMail = / /;

        if(validMail.test(event.target.value)){

        }
        
    }

    const passwordChange = (event) => {

        if(event.target.value.length >= 8){
            
        }

    }

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {



    }, [disabled]);

    return(

        <div className={styles.body}>
            <Container className={styles.register}>
                <Row>
                    <Col xs="12">
                        <Form className={styles.form}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Nombre *</Form.Label>
                                    <Form.Control onKeyUp={nameChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAddress2">
                                    <Form.Label>Apellidos *</Form.Label>
                                    <Form.Control onKeyUp={surnameChange}/>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Teléfono *</Form.Label>
                                    <Form.Control type="email" onKeyUp={phoneChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Correo electrónico *</Form.Label>
                                    <Form.Control type="email" onKeyUp={mailChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Contraseña *</Form.Label>
                                    <Form.Control type="password" onKeyUp={passwordChange}/>
                                </Form.Group>
                            </Row>
                            <Row>
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
                                <Button variant="primary" type="submit" disabled={disabled}>
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