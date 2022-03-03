import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/LandingPageUserProfile.module.css';
import LoginContext from "../contexts/LoginContext";


function LandingPageUserProfile(props){

    const context = useContext(LoginContext);

    const logOut = () => {

            context.setLogin(false);
            context.setUser({});

    }

    return (

        <div className={styles.userProfile}>
            Bienvenido/a, {props.name}
            <Button onClick={logOut}>Cerrar sesión</Button>
        </div>
    );
}

export default LandingPageUserProfile;