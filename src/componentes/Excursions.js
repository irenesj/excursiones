import React from "react";
import Excursion from "./Excursion";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursions.module.css';


function Excursions(props){

    const excursions = props.excursionData.map((excursion) => <Excursion key={excursion.id} {...excursion}/>);
       
    return(

        <div>
            <h2 className={styles.title}>Próximas excursiones</h2>
            {excursions}
        </div>
       
    );

}

export default Excursions;