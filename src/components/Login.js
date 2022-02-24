import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Button, Dropdown } from "react-bootstrap";
import styles from '../css/Login.module.css';
import {validateMail, validatePassword} from '../validation/validations.js'
import NoMessageValidatedFormGroup from "./NoMessageValidatedFormGroup";
import LoginContext from "../contexts/LoginContext";

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


    const loginContext = useContext(LoginContext);

    const submit = () => {

        fetch(url, options)
        .then(response => {
            if (response.status === 401){
                throw new Error("Datos incorrectos. Inténtalo de nuevo.");
            }
            else{
                return response.json();
            }
            
        })
        .then(data => {
            
            loginContext.setLogin(true);

        })
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

        <Dropdown>
            <Dropdown.Toggle variant="success" id="login">
                Login
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <NoMessageValidatedFormGroup control="formBasicEmail" name="Correo electrónico" inputToChange={setMail} value={mail}/>
                    <p className={styles.paragraph}>Nunca compartiremos tus datos con nadie</p>
                </Dropdown.Item>
                <Dropdown.Item>
                    <NoMessageValidatedFormGroup control="formBasicPassword" inputType="password" name="Contraseña" inputToChange={setPassword} value={password}/>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Button variant="primary" type="button" onClick={submit} disabled={disabled}>
                        Inicia sesión
                    </Button>
                </Dropdown.Item>
            </Dropdown.Menu>
           
                <Row>
                    <Col xs="12">
                        {loginContext.login && <p>Estás logueado</p>}
                        {!loginContext.login && <p>No has conseguido loguearte</p>}
                       
                    </Col>
                </Row>
      </Dropdown>
    );
}

export default Login;