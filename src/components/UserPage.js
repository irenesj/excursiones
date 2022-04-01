import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../css/User.module.css';

function User(props){

    return(

        <Container className={styles.user}>
            <Row>
                <Col xs="4">
                    {props.name}{props.surname}
                </Col>
                <Col className={styles.userInfo} xs="8">
                    Correo electrónico: {props.mail}
                    Teléfono: {props.phone}
                </Col>
            </Row>
        </Container>

    );
}

export default User;