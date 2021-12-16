import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../css/Excursions.module.css';
import Excursion from "./Excursion";

function Excursions(){

    const excursiones = [
        <Excursion nombre="Oviedo" zona="Centro" dificultad="Sencilla" horas="4" descripcion="Lorem Ipsum"/>,
        <Excursion nombre="Parque natural del Ponga" zona="Este" dificultad="Dificil" horas="6" descripcion="Lorem Ipsum"/>
    ]

    return(

        <div>
            <h1>Lista de excursiones</h1>
           { excursiones }
        </div>
       
    );

}

export default Excursions;