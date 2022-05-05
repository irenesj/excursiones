import React from "react";
import { Col, Accordion } from 'react-bootstrap';
import FiltersList from './FiltersList';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Filters.module.css';

function Filters(){

    return(
      
      <Col xs="3">
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Zona</Accordion.Header>
            <Accordion.Body>
              <FiltersList />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Dificultad</Accordion.Header>
            <Accordion.Body>
              <FiltersList />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Tiempo estimado</Accordion.Header>
            <Accordion.Body>
              <FiltersList />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    
    );

}

export default Filters;