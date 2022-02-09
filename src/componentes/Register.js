import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from '../css/Register.module.css';
import ValidatedFormGroup from "./ValidatedFormGroup";
import {validateName, validateSurname, validatePhone, validateMail, validatePassword, validSamePassword} from '../validation/validations.js'


function Register(){


    // Variables that receive and change the information that we received from the register form inputs
    const [disabled, setDisabled] = useState(true);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [samePassword, setSamePassword] = useState("");


    // Function that allows register an user sending the POST request
    const url = `http://localhost:3001/users`;
    const options = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(name, surname, phone, mail, password)
    };

    const submit = () => {
        
        fetch(url, options )
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }


    // This useEffect disables the button to log until all the information in the login inputs is correct
    useEffect(() => {
        
        if(validateName(name) && validateSurname(surname) && validatePhone(phone) 
        && validateMail(mail) && validatePassword(password) && validSamePassword(password, samePassword)){
            setDisabled(false);
        }
        else{

            setDisabled(true);
        }

    }, [name, surname, phone, mail, password, samePassword]);

    
    return(

        <div className={styles.body}>
            <Container className={styles.register}>
                <Row>
                    <Col xs="12">
                        <Form className={styles.form} onSubmit={submit}>
                            <Row className="mb-3">
                                <ValidatedFormGroup control="formGridAddress1" name="Nombre *" inputToChange={setName} validationFunction={validateName} value={name} />
                                <ValidatedFormGroup control="formGridAddress2" name="Apellidos *" inputToChange={setSurname} validationFunction={validateSurname} value={surname}/>
                            </Row>
                            <Row className="mb-3">
                                <ValidatedFormGroup control="formGridPhone" inputType="tel" name="Teléfono *" inputToChange={setPhone} validationFunction={validatePhone} value={phone} />
                                <ValidatedFormGroup control="formGridEmail" inputType="email" name="Correo electrónico *" inputToChange={setMail} validationFunction={validateMail} value={mail}/>
                            </Row>
                            <Row>
                                <ValidatedFormGroup control="formGridPassword1" inputType="password" name="Contraseña *" inputToChange={setPassword} validationFunction={validatePassword} value={password}/>
                                <ValidatedFormGroup control="formGridPassword2" inputType="password" name="Repite la contraseña *" inputToChange={setSamePassword} validationFunction={validatePassword} value={samePassword}/>
                            </Row>
                            <Row>
                                <p className={styles.list}>Tu contraseña debe tener al menos 8 caracteres, una letra y un número<br/>Debes estar registrado/a para poder añadir/apuntarte a excursiones<br/> Los campos con el asterisco &#40;*&#41; son obligatorios</p>
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