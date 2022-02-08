import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";


function ValidatedFormGroup(props){

   const [notValid, setNotValid] = useState(false);

    const nameChange = (event) => {
        const value = event.target.value;
        props.inputToChange(value);
        setNotValid(!props.validationFunction(value));
 
    }

    return(
        <Form.Group as={Col} controlId={props.control}>
            <Form.Label>{props.name}</Form.Label>
            <Form.Control type={props.inputType} onChange={nameChange} value={props.value}/>
            { notValid && <p>Datos erróneos: No puedes dejar nada vacío o en un formato incorrecto</p> }
        </Form.Group>
    );
}

export default ValidatedFormGroup;