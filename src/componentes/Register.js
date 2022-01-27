import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from '../css/Register.module.css';

function Register(){

    // Single Responsibility Principle

    const nameChange = (event) => {
 
        setName(event.target.value);
           
    }

    const validateName = (name) => {
        return name.trim() !== "";
    }

    const surnameChange = (event) => {

       setSurname(event.target.value);

    }

    const validateSurname = (surname) => {

        return surname.trim() !== "";
    }

    const phoneChange = (event) => {

        setPhone(event.target.value);

    }

    const validatePhone = (phone) => {

        const validPhone = /^([(][+]?34[)])?\s?(?:6\d|7[1-9])\d(-|\s)?\d{3}(-|\s)?\d{3}$/;

        return validPhone.test(phone);

    }

    const mailChange = (event) => {

       setMail(event.target.value);
        
    }

    const validateMail = (mail) => {

        const validMail = / /;

        return validMail.test(mail);
    }

    const passwordChange = (event) => {

        setPassword(event.target.value);

    }

    const validatePassword = (password) => {

        const validPassword = / /;

        return validPassword.test(password);
    }

    const [disabled, setDisabled] = useState(true);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        
        if(validateName(name) && validateSurname(surname) && validatePhone(phone)){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }

    }, [name, surname, phone, mail, password]);

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