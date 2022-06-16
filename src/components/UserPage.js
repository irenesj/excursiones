import React, { useState } from "react";
import { Col, Button, Row, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router";
import UserPageInputEdit from "./UserPageInputEdit";
import { updateUser } from "../slicers/loginSlice";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/UserPage.module.css';



function UserPage() {

    // Variable that we need to be able to use dispatchers
    const loginDispatch = useDispatch();

    // This useSelector gives us the info if an user is logged or not
    const { login: isLoggedIn, user } = useSelector((state) => state.loginReducer);

    // This variable says if the user is editing information or not
    const [isEditing, setIsEditing] = useState(false);

    // Variable that receive and change the name that we received from the edit inputs
    const [name, setName] = useState(user && user.name);

    // Variable that receive and change the surname that we received from the edit inputs
    const [surname, setSurname] = useState(user && user.surname);

    // Variable that receive and change the phone that we received from the edit inputs
    const [phone, setPhone] = useState(user && user.phone);

    // Variable that sets the information for the current user
    const currentUser = {

        name: name,
        surname: surname,
        mail: user && user.mail,
        phone: phone

    }

    // Variable that has the url that is needed for the fetch
    const url = `http://localhost:3001/users/${currentUser.mail}`;

    // Variable that saves the options that the fetch needs
    const options = {

        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage["token"]
        },
        body: JSON.stringify(currentUser)
    };

    // If the user is not logged in we send him/her to the home page
    if (!isLoggedIn) {
        return <Navigate replace to='/' />;
    }

    // Function that gives an alert when the user starts editing. Then the inputs to edit the user's info appears
    const startEdit = () => {

        setIsEditing(true);

    }

    // Function that gives an alert when the user cancels the editing. Then the inputs to edit the user's info disappears
    const cancelEdit = () => {

        setIsEditing(false);
    }

    // Function that saves the info that the user has changed
    const saveEdit = () => {

        fetch(url, options)
            .then(response => {

                if (response.status === 401) {
                    throw new Error("No estás autorizado/a para hacer esta operación");
                }
                else {
                    return response.json();
                }

            })
            .then(data => {

                loginDispatch(updateUser({

                    user: data

                }));

            })
            .catch(function (error) {

                console.log(error);

            }).finally(() => {

                setIsEditing(false);

            })

    }

    return (

        <Row className="justify-content-center">
            <Col xs="12" md="8" >
                <div className={styles.title}>Tu perfil</div>
                <Container>
                    <Row >
                        <Col className="text-start text-md-end" xs="12" md="6">
                            <label className={styles.userInputLabel}>Correo:</label>
                        </Col>
                        <Col className="text-start" xs="12" md="6">
                            {user && user.mail}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start text-md-end" xs="12" md="6">
                            <label className={styles.userInputLabel}>Nombre:</label>
                        </Col>
                        <Col className="text-start" xs="12" md="6">
                            <UserPageInputEdit isEditing={isEditing} inputToChange={setName} value={name} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start text-md-end" xs="12" md="6">
                            <label className={styles.userInputLabel}>Apellidos:</label>
                        </Col>
                        <Col className="text-start" xs="12" md="6">
                            <UserPageInputEdit isEditing={isEditing} inputToChange={setSurname} value={surname} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start text-md-end" xs="12" md="6">
                            <label className={styles.userInputLabel}>Teléfono:</label>
                        </Col>
                        <Col className="text-start" xs="12" md="6">
                            <UserPageInputEdit isEditing={isEditing} inputToChange={setPhone} value={phone} />
                        </Col>
                    </Row>
                </Container>
                {!isEditing && <Button className={styles.editBtn} variant="success" onClick={startEdit}>Editar</Button>}
                {isEditing && <Button className={styles.cancelBtn} variant="danger" onClick={cancelEdit}>Cancelar</Button>}
                {isEditing && <Button className={styles.saveBtn} variant="success" onClick={saveEdit}>Guardar</Button>}
            </Col>
        </Row>

    );

}

export default UserPage;