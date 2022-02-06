import React from "react";
import { Col, Form } from "react-bootstrap";
import {validateName, validateSurname, validatePhone, validateMail, validatePassword, validSamePassword} from '../validation/validations.js'


function ValidatedFormGroup(props){

    const nameChange = (event) => {
        props.inputToChange(event.target.value);
    }

    return(
        <Form.Group as={Col} controlId={props.control}>
            <Form.Label>{props.name}</Form.Label>
            <Form.Control onChange={nameChange}/>
        </Form.Group>
    );
}

export default ValidatedFormGroup;