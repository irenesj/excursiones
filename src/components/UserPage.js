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
    
    const currentUser = {

        name: name,
        surname: surname,
        mail: user && user.mail,
        phone: phone
        
    }
    const url = `http://localhost:3001/users/${currentUser.mail}`;
    const options = {
  
        method: 'PUT',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + window.localStorage["token"]},
        body: JSON.stringify(currentUser)
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

        fetch(url, options)
        .then(response => {

            if (response.status === 401){
                throw new Error("No estás autorizado para hacer esa operación");
            }
            else{
                return response.json();
            }
        
        })
        .then(data => console.log(data))
        .catch(function(error) {
  
            console.log(error);
  
        }).finally(()=> {

            setIsEditing(false);

        })
        
        

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