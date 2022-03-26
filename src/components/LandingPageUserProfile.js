import React from "react";
import { Button, SplitButton, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/LandingPageUserProfile.module.css';
import { logout } from "../slicers/loginSlice";


function LandingPageUserProfile(props){

    
    const logoutDispatch = useDispatch();
    // Variable that saves the text that says welcome to the user that just had log in
    const text = <div>Bienvenido/a, {props.name}</div>

    // Variable that has the url that is needed for the fetch
    const url = 'http://localhost:3001/login';

    // Variable that saves the options that the fetch needs
    const options = {

        method: 'DELETE',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': `Bearer  TODO poner el token` }


    };


    // Function for logging out
    const logOut = () => {

        fetch(url, options)
        .then((resp) => resp.json())
        .then(function(data) {

            console.log(data)
            logoutDispatch(logout());

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
                <Button className={styles.logoutBtn} variant="success" onClick={logOut}>Cerrar sesión</Button>
            </Dropdown.ItemText>
        </SplitButton>
     
    );
}

export default LandingPageUserProfile;