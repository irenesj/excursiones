import React from "react";
import { Col } from "react-bootstrap";
import Excursion from "./Excursion";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursions.module.css';


function Excursions(props){

    const excursions = props.excursionData.map((excursion) => <Excursion key={excursion.id} {...excursion}/>);
    const found = excursions.length > 0;
    const notFound = <div className={styles.messageNotFound}>Lo sentimos, pero no tenemos ninguna excursión al sitio que estás buscando.</div>;

    return(

        <Col xs="9">
            <h2 className={styles.title}>Próximas excursiones</h2>
            {found && excursions}
            {!found && notFound}
        </Col>
       
    );

}

export default Excursions;