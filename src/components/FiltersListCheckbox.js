import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectFilter, unselectFilter } from "../slicers/filterSlice";

function FiltersListCheckbox(props){

    // Variable that saves if a checkbox is selected or not
    const [ selected, setSelected ] = useState(false);

     // Variable that we nedd to be able to use dispatchers
     const filterDispatch = useDispatch();  

    // Function that changes the state of a checkbox, checked -> unchecked, unchecked -> checked
    const selectedCheckbox = () => {

        setSelected(!selected); 
       
            if(selected){

                filterDispatch(unselectFilter({

                    filterName: props.filterName,
                    filter: props.filter

                }));
            }
            else{

                filterDispatch(selectFilter({

                    filterName: props.filterName,
                    filter: props.filter

                }))

            }
           

     

    }


    return(

        <li key={props.index}><input type="checkbox" onChange={selectedCheckbox}/> {props.filter}</li>

    );
}

export default FiltersListCheckbox;