import React from 'react'
import FechaActual from "../utils/FechaActual";

function Encabezado({claseIcono, titulo}) {
    // corregir fecha
    const fechaCustom = FechaActual();
    return (
        <div className="encabezado">
            <i className={claseIcono}></i>
            <h1>{titulo}</h1>
            <h2>{fechaCustom}</h2>
        </div>
    )
}

export default Encabezado
