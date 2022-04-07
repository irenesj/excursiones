import React from "react";
import { Col, Button } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/UserPage.module.css';


function UserPage(){

    const { login: isLoggedIn, user } = useSelector((state) => state.loginReducer);

    if(!isLoggedIn) {
        return <Navigate replace to='/'/>;
    }

    return(

     <Col xs="8">

        <div className={styles.title}>Tu perfil</div>
        <div className={styles.userInfo}>
            <div className={styles.nameSurname}>{user && user.name} {user && user.surname}</div>
            <div>Correo electrónico: {user && user.mail}</div>
            <div>Teléfono: {user && user.phone}</div>
        </div>
        <Button className={styles.editBtn} variant="success">Editar</Button>

    </Col>

    );

}

export default UserPage;