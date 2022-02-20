import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from '../css/Login.module.css';
import {validateMail, validatePassword} from '../validation/validations.js'
import NoMessageValidatedFormGroup from "./NoMessageValidatedFormGroup";

function Login(){

    // Variables that receive and change the information that we received from the login form inputs
     const [disabled, setDisabled] = useState(true);
     const [mail, setMail] = useState("");
     const [password, setPassword] = useState("");

    const url = 'http://localhost:3001/login';

    const login = {

        mail: mail,
        password: password
    }

    const options = {

        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login)

    };

    const submit = () => {

        fetch(url, options)
        .then(response => {
            if (response.status === 401){
                throw new Error("Datos incorrectos. Inténtalo de nuevo.");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => alert(error))
    
    }

    // This useEffect disables the button to log until all the information in the login inputs is correct
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
                            <NoMessageValidatedFormGroup control="formBasicEmail" name="Correo electrónico" inputToChange={setMail} value={mail}/>
                            <p className={styles.paragraph}>Nunca compartiremos tus datos con nadie</p>
                            <NoMessageValidatedFormGroup control="formBasicPassword" inputType="password" name="Contraseña" inputToChange={setPassword} value={password}/>
                            <div className={styles.btn}>
                            <Button variant="primary" type="button" onClick={submit} disabled={disabled}>
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