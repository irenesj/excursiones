import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import styles from '../css/User.module.css';

function User(){

    return(
        <Container className={styles.user}>
            <Row>
                <Col xs="4">
                    <Image className={styles.userImage} src="../images/user-icon.svg" roundedCircle />
                    Nombre y Apellidos
                </Col>
                <Col className={styles.userInfo} xs="8">
                    <div className={styles.title}>Excursiones favoritas</div>
                    <div className={styles.title}>Excursiones a las que has ido</div>
                    <Button variant="success">Añadir excursión</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default User;