import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

// This component controls the user page edit inputs
function UserPageInputEdit(props){

    const inputChange = (event) => {

        const value = event.target.value;
        props.inputToChange(value);

    }

    const editingInput = <input type="text" onChange={inputChange} value={props.value} />;

    return (

        <div>
               {!props.isEditing && props.value} 
                {props.isEditing && editingInput}
        </div>     

    );

}

export default UserPageInputEdit;