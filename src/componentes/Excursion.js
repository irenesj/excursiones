import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
import styles from '../css/Excursion.module.css';

function Excursion(props){

    return(

        <div className={styles.excursion}>
            <img src="" alt="Excursiones"/>
            <div className={styles.title}>{props.name}</div> <br/>
            Zona: {props.area} <br/>
            Dificultad: {props.dificulty} <br/>
            Horas estimadas: {props.hours} <br/>
            Descripción: {props.description} <br/><br/>
            <Button variant="success">Apuntarse</Button>
        </div>

    );
}

export default Excursion;