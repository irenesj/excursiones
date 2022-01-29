import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from '../css/Login.module.css';
import {validateMail, validatePassword} from '../validation/validations.js'

function Login(){

    const mailChange = (event) => {
        setMail(event.target.value);
     }
 
     const passwordChange = (event) => {
         setPassword(event.target.value);
     }

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
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" onKeyUp={mailChange}/>
                                <Form.Text className="text-muted">
                                    Nunca compartiremos tu correo con nadie.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" onKeyUp={passwordChange}/>
                            </Form.Group>
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