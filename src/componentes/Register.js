import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from '../css/Register.module.css';
import {validateName, validateSurname, validatePhone, validateMail, validatePassword, validSamePassword} from '../validation/validations.js'
import ValidatedFormGroup from "./ValidatedFormGroup";

function Register(){


    const [disabled, setDisabled] = useState(true);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [samePassword, setSamePassword] = useState("");


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
                        <Form className={styles.form}>
                            <Row className="mb-3">
                                <ValidatedFormGroup control="formGridAddress1" name="Nombre *" inputToChange={setName}/>
                                <ValidatedFormGroup control="formGridAddress2" name="Apellidos *" inpuToChange={setSurname}/>
                            </Row>
                            <Row className="mb-3">
                                <ValidatedFormGroup control="formGridPhone" name="Teléfono *" inputToChange={setPhone}/>
                                <ValidatedFormGroup control="formGridEmail" name="Correo electrónico *" inputToChange={setMail}/>
                            </Row>
                            <Row>
                                <ValidatedFormGroup control="formGridPassword" name="Contraseña *" inputToChange={setPassword}/>
                                <ValidatedFormGroup control="formGridPassword" name="Repite la contraseña *" inputToChange={setSamePassword}/>
                            </Row>
                            <Row>
                                <p className={styles.list}>Debes estar registrado para poder añadir y/o apuntarte a una excursión<br/> Los campos que llevan el asterisco &#40;*&#41; son obligatorios</p>
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