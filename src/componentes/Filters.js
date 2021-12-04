import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, ListGroup, Row} from 'react-bootstrap';
import styles from '../css/Filters.module.css';

function Filters(){

    return(
       
      <Row>
          <Col xs="3">
            <ListGroup variant="flush">
                    <ListGroup.Item><a href="#">Taramundi</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Oviedo</a></ListGroup.Item>
                    <ListGroup.Item>Cangas de Onís</ListGroup.Item>
                    <ListGroup.Item>Ribadesella</ListGroup.Item>
                    <ListGroup.Item>Picos de Europa</ListGroup.Item>
                    <ListGroup.Item>Río Sella</ListGroup.Item>
                    <ListGroup.Item>Gijón</ListGroup.Item>
                    <ListGroup.Item>Llanes</ListGroup.Item>
                    <ListGroup.Item>Parque natural de Ponga</ListGroup.Item>
                    <ListGroup.Item>Lastres</ListGroup.Item>
                </ListGroup>
            </Col>
      </Row>
                
       
    );

}

export default Filters;