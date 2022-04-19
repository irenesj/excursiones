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
    const [ surname, setSurname ] = useState(user && user.surname);
    const [ phone, setPhone ] = useState(user && user.phone);
    
    const url = `http://localhost:3001/users`;
    const options = {
  
        method: 'PATCH',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    
      };
     


    if(!isLoggedIn) {
        return <Navigate replace to='/'/>;
    }

    const startEdit = () => {

        setIsEditing(true);

    }

    const cancelEdit = () => {

        setIsEditing(false);
    }

    const saveEdit = () => {

        fetch(url, options){

        }
        .then
        setIsEditing(false);

    }

    return(

    <Col xs="8">

        <div className={styles.title}>Tu perfil</div>
        <div className={styles.userInfo}>
            <label className={styles.userInputLabel}>Correo electrónico</label> 
            {user && user.mail}
            <div>
                <UserPageInputEdit info="Nombre" isEditing={isEditing} inputToChange={setName} value={name}/>
            </div>                
            <div>
                <UserPageInputEdit info="Apellidos" isEditing={isEditing} inputToChange={setSurname} value={surname}/>
            </div>  
            <div>
                <UserPageInputEdit info="Teléfono" isEditing={isEditing} inputToChange={setPhone} value={phone}/>
            </div>  
        </div>
        {!isEditing && <Button className={styles.editBtn} variant="success" onClick={startEdit}>Editar</Button>}
        {isEditing && <Button className={styles.cancelBtn} variant="success" onClick={cancelEdit}>Cancelar</Button>}
        {isEditing && <Button className={styles.saveBtn} variant="success" onClick={saveEdit}>Guardar</Button>}

    </Col>

    );

}

export default UserPage;