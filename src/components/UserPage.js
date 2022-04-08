import React, { useState } from "react";
import { Col, Button } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import UserPageInputEdit from "./UserPageInputEdit";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/UserPage.module.css';


function UserPage(){

    const { login: isLoggedIn, user } = useSelector((state) => state.loginReducer);
    const [ isEditing, setIsEditing ] = useState(false);
    const [ name, setName ] = useState(user && user.name);

    if(!isLoggedIn) {
        return <Navigate replace to='/'/>;
    }

    const startEdit = () => {

        setIsEditing(true);

    }

    const saveEdit = () => {

        setIsEditing(false);

    }

    const cancelEdit = () => {

        setIsEditing(false);
    }

    return(

    <Col xs="8">

        <div className={styles.title}>Tu perfil</div>
        <div className={styles.userInfo}>
            <div>Correo electrónico: {user && user.mail}</div>
            <div>
                <UserPageInputEdit info="Nombre" field={user && user.name} isEditing={isEditing}/>
            </div>                
            <div>
                <UserPageInputEdit info="Apellidos" field={user && user.surname} isEditing={isEditing}/>
            </div>  
            <div>
                <UserPageInputEdit info="Teléfono" field={user && user.phone} isEditing={isEditing}/>
            </div>  
        </div>
        {!isEditing && <Button className={styles.editBtn} variant="success" onClick={startEdit}>Editar</Button>}
        {isEditing && <Button className={styles.cancelSaveBtns} variant="success" onClick={cancelEdit}>Cancelar</Button>}
        {isEditing && <Button className={styles.cancelSaveBtns} variant="success" onClick={saveEdit}>Guardar</Button>}

    </Col>

    );

}

export default UserPage;