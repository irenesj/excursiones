import React, { useContext } from "react";
import { Button, SplitButton, Dropdown } from "react-bootstrap";
import LoginContext from "../contexts/LoginContext";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/LandingPageUserProfile.module.css';


function LandingPageUserProfile(props){

    const context = useContext(LoginContext);
    const text = <div>Bienvenido/a, {props.name}</div>

    const url = 'http://localhost:3001/login';
    const options = {

        method: 'DELETE',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }

    };

    const logOut = () => {


        fetch(url, options)
        .then((resp) => resp.json())
        .then(function(data) {

            console.log(data)

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