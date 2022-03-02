import React from "react";
import { Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/LandingPageUserProfile.module.css';
import { propTypes } from "react-bootstrap/esm/Image";


function LandingPageUserProfile(props){

    return (

        <p className={styles.welcomeMessage}>Bienvenido/a {props.name}<Image className={styles.userImage} src="../images/user-icon.svg" roundedCircle /></p>

    );
}

export default LandingPageUserProfile;