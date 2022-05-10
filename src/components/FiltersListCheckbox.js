import React, { useState } from "react";

function FiltersListCheckbox(props){

    const [ selected, setSelected ] = useState(false);

    const checkbox = () => {

    }


    return(

        <li key={props.index}><input type="checkbox" onChange={checkbox}/> {props.index}</li>

    );
}

export default FiltersListCheckbox;