import React from "react";

function Excursion(props){

    return(
        <div>
            Nombre: {props.nombre} <br/>
            Zona: {props.zona} <br/>
            Dificultad: {props.dificultad} <br/>
            Horas estimadas para completar el trayecto: {props.horas} <br/>
            Descripción: {props.descripcion} <br/><br/>
        </div>
    );
}

export default Excursion;