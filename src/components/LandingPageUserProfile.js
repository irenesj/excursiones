import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/LandingPageUserProfile.module.css';
import LoginContext from "../contexts/LoginContext";


function LandingPageUserProfile(props){

    const context = useContext(LoginContext);

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

            context.setLogOut(data);

        })
        .catch(function(error) {

            console.log(error);

        });

    }

    return (

        <div className={styles.userProfile}>
            Bienvenido/a, {props.name} 
            <Button onClick={logOut}>Cerrar sesión</Button>
        </div>
    );
}

export default LandingPageUserProfile;