import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/FiltersList.module.css';

function FiltersList(props){

  
    const [ arrayFilters, setArrayFilters ] = useState([]);

    const url = `http://localhost:3001/filters?type=${props.filter}`;
    
    const options = {
    
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }

    };
    
    useEffect(()=> {

       fetch(url, options)
       .then((resp) => resp.json())
       .then(function(data) {

        setArrayFilters(data);

      })
      .catch(function(error) {

        console.log(error);

    });
        
    }, [])

    return (

        <ul className={styles.listInfo}>

            <li>{arrayFilters[0]}</li> 
            <li>{arrayFilters[1]}</li>   
            <li>{arrayFilters[2]}</li> 
              
        </ul>

    );
}

export default FiltersList;