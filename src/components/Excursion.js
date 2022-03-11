import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursion.module.css';
import LoginContext from "../contexts/LoginContext";

function Excursion(props){

    const context = useContext(LoginContext);

    return(

        <div className={styles.excursion}>
            <div className={styles.title}>{props.name}</div>
            <div className={styles.bold}>Zona:</div> {props.area}<br/> 
            <div className={styles.bold}>Dificultad:</div> {props.dificulty}<br/> 
            <div className={styles.bold}>Tiempo estimado:</div> {props.time}<br/> 
            <div className={styles.bold}>Descripción:</div> {props.description}<br/> 
            {context.login && 
                <Button className={styles.btn} variant="primary" type="button" >
                    Apuntarse
                </Button>
            }
        </div>

    );
}

export default Excursion;