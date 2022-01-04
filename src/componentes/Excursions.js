import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursions.module.css';
import Excursion from "./Excursion";


function Excursions(){

    const [excursion, setExcursion] = useState([]); //useState

    const url = 'http://localhost:3001/excursions';

 

    // Side Effect
    useEffect(() => {

        fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data);
            const excursions = data.map((excursion) => <Excursion {...excursion}/>);
            setExcursion(excursions);
            //const excursions = data.map((excursion) => <Excursion name={excursion.name} area={excursion.area} dificulty={excursion.dificulty} hours={excursion.hours} description={excursion.description}/>);
        })
        .catch(function(error) {
            console.log(error);
        });

    },[]);


    

    return(

        <div>
            <h2>Próximas excursiones</h2>
            {excursion}
        </div>
       
    );

}

export default Excursions;