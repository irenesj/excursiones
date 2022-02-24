import React from "react";
import { Col, Form } from "react-bootstrap";

function NoMessageValidatedFormGroup(props){

    const nameChange = (event) => {

        const value = event.target.value;
        props.inputToChange(value);
 
    }

    return(
        <Form.Group as={Col} controlId={props.control}>
            <Form.Label>{props.name}</Form.Label>
            <Form.Control type={props.inputType} onChange={nameChange} value={props.value}/>
        </Form.Group>
    );
}

export default NoMessageValidatedFormGroup;