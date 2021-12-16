import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../css/Excursions.module.css';
import Excursion from "./Excursion";

function Excursions(){

    const excursiones = [
        <Excursion nombre="Oviedo"/>,
        <Excursion nombre="Parque natural del Ponga"/>
    ]

    return(

        <div>
           { excursiones }
        </div>
       
    );

}

export default Excursions;