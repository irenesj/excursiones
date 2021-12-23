import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursions.module.css';
import Excursion from "./Excursion";


function Excursions(){

    const [excursion, setExcursion] = useState([]); //useState

    const url = 'http://localhost:3001/excursions';

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let excursions = data;
        excursions.map(() => <Excursion />)
    })
    .catch(function(error) {
        console.log(error);
    });

    return(

        <div>
            <h2>Próximas excursiones</h2>
        </div>
       
    );

}

export default Excursions;