import React, { useEffect, useState } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { validateMail, validatePassword } from '../validation/validations.js';
import ValidatedFormGroup from "./ValidatedFormGroup";
import { login } from "../slicers/loginSlice";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Login.module.css';

function Login(){


    // Variable that we nedd to be able to use dispatchers
    const loginDispatch = useDispatch();  

    // Variable that saves if the login button is disabled or not
    const [disabled, setDisabled] = useState(true);

    // Variable that receive and change the mail that we received from the login form inputs
    const [mail, setMail] = useState("");

    // Variable that receive and change the password that we received from the login form inputs
    const [password, setPassword] = useState("");

    // Variable that has the url that is needed for the fetch
    const url = 'http://localhost:3001/login';

    // Login object that we pass to the server for it to authenticate the user
    const login = {

        mail: mail,
        password: password
    }
    
    // Variable that saves the options that the fetch needs
    const options = {

        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login)

    };
    


    // Function that submits the information for the login form
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

            loginDispatch(login());
            window.localStorage["token"] = data.token;
            console.log(localStorage);

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
                    <ValidatedFormGroup control="formBasicEmail" name="Correo electrónico" inputToChange={setMail} validationFunction={validateMail} value={mail}/>
                    <p>Nunca compartiremos tus datos con nadie</p>
                </div>
            </Dropdown.ItemText>
            <Dropdown.ItemText>
                <div className={styles.formText}>
                    <ValidatedFormGroup control="formBasicPassword" inputType="password" name="Contraseña" inputToChange={setPassword} validationFunction={validatePassword} value={password}/>  
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