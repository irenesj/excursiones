import React, { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { validateMail, validatePassword } from '../validation/validations.js';
import ValidatedFormGroup from './ValidatedFormGroup';
import { login } from '../slicers/loginSlice';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Login.module.css';
import { userLogin } from '../helpers/helpers.js';

export function Login(){


    // Variable that we nedd to be able to use dispatchers
    const loginDispatch = useDispatch();  

    // Variable that saves if the login button is disabled or not
    const [disabled, setDisabled] = useState(true);

    // Variable that receive and change the mail that we received from the login form inputs
    const [mail, setMail] = useState("");

    // Variable that receive and change the password that we received from the login form inputs
    const [password, setPassword] = useState("");

    
    // Function that submits the information for the login form
    const submit = () => {

        userLogin(mail, password)
        .then(data => {

            loginDispatch(login({

                user: data.user,
                token: data.token

            }));
            window.localStorage["token"] = data.token;

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

        <DropdownButton className={styles.loginDropdownButton} variant="success" title="Inicia sesión" autoClose={false}>
            <Dropdown.ItemText className={styles.loginDropdownButtonText}>
                <div className={styles.formText}>
                    <ValidatedFormGroup control="formBasicEmail" name="Correo electrónico" inputToChange={setMail} validationFunction={validateMail} value={mail} message={false}/>
                    <p>Nunca compartiremos tus datos con nadie</p>
                </div>
            </Dropdown.ItemText>
            <Dropdown.ItemText>
                <div className={styles.formText}>
                    <ValidatedFormGroup control="formBasicPassword" inputType="password" name="Contraseña" inputToChange={setPassword} validationFunction={validatePassword} value={password} message={false}/>  
                </div>
            </Dropdown.ItemText>
            <Dropdown.ItemText>
                <Button className={styles.sendBtn} variant="success" type="button" onClick={submit} disabled={disabled}>
                    Enviar
                </Button>
            </Dropdown.ItemText>
      </DropdownButton>

    );

}

export default Login;