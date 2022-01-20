import React from "react";
import Excursion from "./Excursion";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursions.module.css';


function Excursions(props){

    const excursions = props.excursionData.map((excursion) => <Excursion key={excursion.id} {...excursion}/>);
    const encontrado = excursions.length > 0;
    const noEncontrado = <p>No tenemos ninguna excursión a ese sitio</p>;

    return(

        <div>
            <h2 className={styles.title}>Próximas excursiones</h2>
            {encontrado && excursions}
            {!encontrado && noEncontrado}
        </div>
       
    );

}

export default Excursions;