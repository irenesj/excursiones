import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from '../css/Login.module.css';
import {validateMail, validatePassword} from '../validation/validations.js'
import ValidatedFormGroup from "./ValidatedFormGroup";

function Login(){

     const [disabled, setDisabled] = useState(true);
     const [mail, setMail] = useState("");
     const [password, setPassword] = useState("");

    
     useEffect(() => {

        if(validateMail(mail) && validatePassword(password)){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }

     }, [mail, password]);

    return(

        <div className={styles.body}>
            <Container className={styles.login}>
                <Row>
                    <Col xs="12">
                        <Form className={styles.form}>
                            <ValidatedFormGroup control="formBasicEmail" name="Correo electrónico" inputToChange={setMail} validationFunction={validateMail} value={mail}/>
                            <p className={styles.paragraph}>Nunca compartiremos tus datos con nadie</p>
                            <ValidatedFormGroup control="formBasicPassword" name="Contraseña" inputToChange={setPassword} validationFunction={validatePassword} value={password}/>
                            <div className={styles.btn}>
                            <Button variant="primary" type="submit" disabled={disabled}>
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