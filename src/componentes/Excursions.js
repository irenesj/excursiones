import React from "react";
import Excursion from "./Excursion";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursions.module.css';


function Excursions(props){

    const excursions = props.excursionData.map((excursion) => <Excursion key={excursion.id} {...excursion}/>);
    const found = excursions.length > 0;
    const notFound = <div className={styles.messageNotFound}>Lo sentimos, pero no tenemos ninguna excursión al sitio que has buscado.</div>;

    return(

        <div>
            <h2 className={styles.title}>Próximas excursiones</h2>
            {found && excursions}
            {!found && notFound}
        </div>
       
    );

}

export default Excursions;