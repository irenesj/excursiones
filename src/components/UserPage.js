import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/UserPage.module.css';


function UserPage(){

    const { user } = useSelector((state) => state.loginReducer);

    return(

        <Container className={styles.user}>
            <Row>
                <Col xs="8">
                    <div>{user && user.name}</div>
                    <div>{user && user.surname}</div>
                    <div>Correo electrónico: {user && user.mail}</div>
                    <div>Teléfono: {user && user.phone}</div>
                    <Button variant="success">Editar</Button>
                </Col>
            </Row>
        </Container>

    );

}

export default UserPage;