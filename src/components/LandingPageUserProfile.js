import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/LandingPageUserProfile.module.css';


function LandingPageUserProfile(props){

    return (

        <div className={styles.userProfile}>
            Bienvenido/a, {props.name}
            <Button>Cerrar sesión</Button>
        </div>
    );
}

export default LandingPageUserProfile;