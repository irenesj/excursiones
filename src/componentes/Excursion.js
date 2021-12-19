import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursion.module.css';

function Excursion(props){

    return(
        <div className={styles.excursion}>
            <img src="" height="200px" width="400px" alt="Excursiones"/>
            {props.nombre} <br/>
            Zona: {props.zona} <br/>
            Dificultad: {props.dificultad} <br/>
            Horas estimadas: {props.horas} <br/>
            Descripción: {props.descripcion} <br/><br/>
        </div>
    );
}

export default Excursion;