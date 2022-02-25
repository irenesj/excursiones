import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Accordion } from 'react-bootstrap';
import styles from '../css/Filters.module.css';

function Filters(){

    return(
      
      <div>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Zona</Accordion.Header>
            <Accordion.Body>
              <ul className={styles.listInfo}>
                <li>Oeste</li>
                <li>Centro-Oeste</li>
                <li>Centro</li>
                <li>Centro-Este</li>
                <li>Este</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Dificultad</Accordion.Header>
            <Accordion.Body>
              <ul className={styles.listInfo}>
                <li>Baja</li>
                <li>Media</li>
                <li>Alta</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Tiempo estimado</Accordion.Header>
            <Accordion.Body>
              <ul className={styles.listInfo}>
                <li>5 horas</li>
                <li>6 horas</li>
                <li>7 horas</li>
                <li>8 horas</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    
    );

}

export default Filters;