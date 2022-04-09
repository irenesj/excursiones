import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/UserPageInputEdit.module.css';


function UserPageInputEdit(props){


    const inputChange = (event) => {

        const value = event.target.value;

    }

    const editingInput = <input type="text" onChange={inputChange} value={props.field} />;

    return (

        <div>
                <label className={styles.userInputLabel}>{props.info}</label> {!props.isEditing && props.field} 
                              {props.isEditing && editingInput}
        </div>     

    );

}

export default UserPageInputEdit;