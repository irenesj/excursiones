import React from "react";
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursion.module.css';

function Excursion(props){

  
   // Variable that says if some user is logged in or not
  const isLoggedIn = useSelector( (state) => state.loginReducer.login);

  const joinExcursion = () => {

    

  }

    return(

        <div className={styles.excursion}>
            <div className={styles.title}>{props.name}</div>
            <div className={styles.bold}>Zona:</div> {props.area}<br/> 
            <div className={styles.bold}>Dificultad:</div> {props.dificulty}<br/> 
            <div className={styles.bold}>Tiempo estimado:</div> {props.time}<br/> 
            <div className={styles.bold}>Descripción:</div> {props.description}<br/> 
            {isLoggedIn &&  
                <Button className={styles.btn} variant="success" type="button" onClick={joinExcursion}>
                    Apuntarse
                </Button>
            }
        </div>

    );
    
}

export default Excursion;