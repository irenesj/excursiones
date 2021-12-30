import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
import styles from '../css/Excursion.module.css';

function Excursion(props){

    return(

        <div className={styles.excursion}>
            <div className={styles.title}>{props.name}</div>
            <img src="" alt="Excursiones"/>
            <div className={styles.bold}>Zona</div> {props.area} 
            <div className={styles.bold}>Dificultad</div> {props.dificulty}
            <div className={styles.bold}>Horas estimadas</div> {props.hours} 
            <div className={styles.bold}>Descripción</div> {props.description} 
            <div className={styles.btn}>
                <Button variant="success">Apuntarse</Button>
            </div>
        </div>

    );
}

export default Excursion;