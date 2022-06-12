import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../slicers/loginSlice';
import ValidatedFormGroup from './ValidatedFormGroup';
import { validateName, validateSurname, validatePhone, validateMail, validatePassword, validSamePassword } from '../validation/validations.js'
import { userLogin, registerUser } from '../helpers/helpers';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Register.module.css';


function Register() {

    // This useSelector gives us the info if an user is logged or not
    const isLoggedIn = useSelector(state => state.loginReducer.login);

    // Variable that we nedd to be able to use dispatchers
    const loginDispatch = useDispatch();

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

    // Function that allows register an user sending a POST request
    const submit = () => {

        // We use the function for register an user from the helpers
        registerUser(name, surname, phone, mail, password)
            .then(data => {

                return userLogin(mail, password);

            })
            .then(data => {

                // If there´s no problem in the server, the user logs in and the his/her information is saved in the store
                loginDispatch(login({

                    user: data.user,
                    token: data.token

                }));
                // And then his/her token is saved in the localStorage
                window.localStorage["token"] = data.token;

            })
            .catch(error => alert(error))


    }

    // This useEffect disables the button to register until all the information in the register inputs is correct
    useEffect(() => {

        if (validateName(name) && validateSurname(surname) && validatePhone(phone)
            && validateMail(mail) && validatePassword(password) && validSamePassword(password, samePassword)) {
            setDisabled(false);
        }
        else {

            setDisabled(true);
        }

    }, [name, surname, phone, mail, password, samePassword]);

    // 
    if (isLoggedIn) {
        return <Navigate replace to="/" />;
    }

    return (

        <Col>
            <Form className={styles.form}>
                <Row className="mb-3">
                    <ValidatedFormGroup control="formGridAddress1" name="Nombre" inputToChange={setName} validationFunction={validateName} value={name} message={true} />
                    <ValidatedFormGroup control="formGridAddress2" name="Apellidos" inputToChange={setSurname} validationFunction={validateSurname} value={surname} message={true} />
                </Row>
                <Row className="mb-3">
                    <ValidatedFormGroup control="formGridPhone" inputType="tel" name="Teléfono" inputToChange={setPhone} validationFunction={validatePhone} value={phone} message={true} />
                    <ValidatedFormGroup control="formGridEmail" inputType="email" name="Correo electrónico" inputToChange={setMail} validationFunction={validateMail} value={mail} message={true} />
                </Row>
                <Row>
                    <ValidatedFormGroup control="formGridPassword1" inputType="password" name="Contraseña" inputToChange={setPassword} validationFunction={validatePassword} value={password} message={true} />
                    <ValidatedFormGroup control="formGridPassword2" inputType="password" name="Repite la contraseña" inputToChange={setSamePassword} validationFunction={validatePassword} value={samePassword} message={true} />
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

    );

}

export default Register;