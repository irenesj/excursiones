import React, { useContext } from "react";
import { Button, SplitButton, Dropdown } from "react-bootstrap";
import LoginContext from "../contexts/LoginContext";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/LandingPageUserProfile.module.css';


function LandingPageUserProfile(props){

    // Variable that saves the login context to know when we need to display some information and when we need to display other information
    const context = useContext(LoginContext);
    // Variable that saves the text that says welcome to the user that just had log in
    const text = <div>Bienvenido/a, {props.name}</div>
    // Variable that has the url that is needed for the fetch
    const url = 'http://localhost:3001/login';
    // Variable that saves the options that the fetch needs
    const options = {

        method: 'DELETE',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }

    };

    // Function for logging out
    const logOut = () => {

        fetch(url, options)
        .then((resp) => resp.json())
        .then(function(data) {

            console.log(data)
            context.logOut();

        })
        .catch(function(error) {

            console.log(error);

        });

    }

    
    return (

        <SplitButton className={styles.userProfile} variant="success" title={text} >
            <Dropdown.ItemText className={styles.dropdownText}>Perfil</Dropdown.ItemText>
            <Dropdown.Divider />
            <Dropdown.ItemText className={styles.dropdownText}>
                <Button className={styles.logoutBtn} onClick={logOut}>Cerrar sesión</Button>
            </Dropdown.ItemText>
        </SplitButton>
     
    );
}

export default LandingPageUserProfile;