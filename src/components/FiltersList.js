import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/FiltersList.module.css';
import FiltersListCheckbox from "./FiltersListCheckbox";

function FiltersList(props){

  
    const [ arrayFilters, setArrayFilters ] = useState([]);
    const [ selected, setSelected ] = useState(false);
    
    useEffect(()=> {

        const url = `http://localhost:3001/filters?type=${props.filter}`;
        const options = {
    
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }
    
        };

       fetch(url, options)
       .then((resp) => resp.json())
       .then(function(data) {

        setArrayFilters(data);

      })
      .catch(function(error) {

        console.log(error);

    });
        
    }, [props])

    return (

        <ul className={styles.listInfo}>

            {arrayFilters.map(i => <FiltersListCheckbox/>)}
              
        </ul>

    );
}

export default FiltersList;