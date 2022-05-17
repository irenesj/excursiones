import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectFilter, unselectFilter } from "../slicers/filterSlice";

function FiltersListCheckbox(props){

    const [ selected, setSelected ] = useState(false);

     // Variable that we nedd to be able to use dispatchers
     const filterDispatch = useDispatch();  

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