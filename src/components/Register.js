import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import ValidatedFormGroup from "./ValidatedFormGroup";
import {validateName, validateSurname, validatePhone, validateMail, validatePassword, validSamePassword} from '../validation/validations.js'
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Register.module.css';


function Register(){

    const isLoggedIn = useSelector(state => state.loginReducer.login )
    // Variable that saves if the register button is disabled or not
    const [disabled, setDisabled] = useState(true);
    // Variable that receive and change the name that we received from the login form inputs
    const [name, setName] = useState("");
    // Variable that receive and change the surname that we received from the login form inputs
    const [surname, setSurname] = useState("");
    // Variable that receive and change the phone that we received from the login form inputs
    const [phone, setPhone] = useState("");
    // Variable that receive and change the mail that we received from the login form inputs
    const [mail, setMail] = useState("");
    // Variable that receive and change the password that we received from the login form inputs
    const [password, setPassword] = useState("");
    // Variable that receive and change the password that we received from the login form inputs
    const [samePassword, setSamePassword] = useState("");
    // Variable that has the url that is needed for the fetch
    const url = `http://localhost:3001/users`;
    // Variable that has a user with the information we have received from the register form, then this is sent to the server to add the user
    const user = {

        name: name,
        surname: surname,
        phone: phone,
        mail: mail,
        password: password
    }
    // Variable that saves the options that the fetch needs
    const options = {

        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    // Function that allows register an user sending the POST request
    const submit = () => {
        
        fetch(url, options )
        .then(response => {
            if (response.status === 409){
                throw new Error("Tu nombre de usuario ya se está utilizando");
            }
            else{
                return response.json();
            }
            
        })
        .then(data => console.log(data))
        .catch(error => alert(error))
    
    }

    // This useEffect disables the button to register until all the information in the register inputs is correct
    useEffect(() => {
        
        if(validateName(name) && validateSurname(surname) && validatePhone(phone) 
        && validateMail(mail) && validatePassword(password) && validSamePassword(password, samePassword)){
            setDisabled(false);
        }
        else{

            setDisabled(true);
        }

    }, [name, surname, phone, mail, password, samePassword]);

    if(isLoggedIn) {
        return <Navigate replace to="/"/>;
    }
    
    return(

        <div className={styles.body}>
            <Container className={styles.register}>
                <Row>
                    <Col xs="12">
                        <Form className={styles.form}>
                            <Row className="mb-3">
                                <ValidatedFormGroup control="formGridAddress1" name="Nombre" inputToChange={setName} validationFunction={validateName} value={name} message={true}/>
                                <ValidatedFormGroup control="formGridAddress2" name="Apellidos" inputToChange={setSurname} validationFunction={validateSurname} value={surname} message={true}/>
                            </Row>
                            <Row className="mb-3">
                                <ValidatedFormGroup control="formGridPhone" inputType="tel" name="Teléfono" inputToChange={setPhone} validationFunction={validatePhone} value={phone} message={true}/>
                                <ValidatedFormGroup control="formGridEmail" inputType="email" name="Correo electrónico" inputToChange={setMail} validationFunction={validateMail} value={mail} message={true}/>
                            </Row>
                            <Row>
                                <ValidatedFormGroup control="formGridPassword1" inputType="password" name="Contraseña" inputToChange={setPassword} validationFunction={validatePassword} value={password} message={true}/>
                                <ValidatedFormGroup control="formGridPassword2" inputType="password" name="Repite la contraseña" inputToChange={setSamePassword} validationFunction={validatePassword} value={samePassword} message={true}/>
                            </Row>
                            <Row>
                                <ul className={styles.list}>
                                    <li>Tu contraseña debe tener al menos 8 caracteres, una letra y un número</li>
                                    <li>Debes estar registrado/a para poder apuntarte a las excursiones</li>
                                </ul>
                            </Row>
                            <div className={styles.btn}>
                                <Button variant="success" type="button" onClick={submit} disabled={disabled}>
                                    Enviar
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