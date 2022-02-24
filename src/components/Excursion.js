import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursion.module.css';

function Excursion(props){

    return(

        <div className={styles.excursion}>
            <div className={styles.title}>{props.name}</div>
            <img src="" alt="Lista de excursiones disponibles"/><br/> 
            <div className={styles.bold}>Zona:</div> {props.area}<br/> 
            <div className={styles.bold}>Dificultad:</div> {props.dificulty}<br/> 
            <div className={styles.bold}>Tiempo estimado:</div> {props.time}<br/> 
            <div className={styles.bold}>Descripción:</div> {props.description}<br/> 
        </div>

    );
}

export default Excursion;