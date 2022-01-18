import React, { useState } from "react";
import Excursion from "./Excursion";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursions.module.css';


function Excursions(props){

    const [excursion, setExcursion] = useState([]); 

    console.log(props);

    const data = Array.from(props.excursionData);
    const excursions = data.map((excursion) => <Excursion {...excursion}/>);
    setExcursion(excursions);
       
    return(

        <div>
            <h2 className={styles.title}>Próximas excursiones</h2>
            {excursion}
        </div>
       
    );

}

export default Excursions;