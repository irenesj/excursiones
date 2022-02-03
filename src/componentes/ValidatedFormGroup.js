import React from "react";
import { Col, Form } from "react-bootstrap";


function ValidatedFormGroup(props){

    const nameChange = (event) => {
        props.inputTochange(event.target.value);
    }

    return(
        <Form.Group as={Col} controlId={props.control}>
            <Form.Label>{props.name}</Form.Label>
            <Form.Control onChange={nameChange}/>
        </Form.Group>
    );
}

export default ValidatedFormGroup;