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

                    key: '',
                    value: ''

                }));
            }
            else{

            }
           

     

    }


    return(

        <li key={props.index}><input type="checkbox" onChange={selectedCheckbox}/> {props.index}</li>

    );
}

export default FiltersListCheckbox;