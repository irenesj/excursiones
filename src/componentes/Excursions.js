import React from "react";
import Excursion from "./Excursion";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursions.module.css';


function Excursions(props){

    const excursions = props.excursionData.map((excursion) => <Excursion key={excursion.id} {...excursion}/>);
    const found = excursions.length > 0;
    const notFound = <div className={styles.alertNotFound}>Lo sentimos, pero no tenemos ninguna excursión a ese sitio.</div>;

    return(

        <div>
            <h2 className={styles.title}>Próximas excursiones</h2>
            {found && excursions}
            {!found && notFound}
        </div>
       
    );

}

export default Excursions;