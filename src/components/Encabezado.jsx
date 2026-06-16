import React from 'react'
import FechaActual from "../funciones/FuncionesFecha";

function Encabezado({srcimagen, titulo}) {
    // corregir fecha
    const fechaCustom = FechaActual();
    return (
        <div className="fecha-info">
            <img src={srcimagen} alt=" " style={{ width: "50px" }} />
            <h1>{titulo}</h1>
            <h2>{fechaCustom}</h2>
        </div>
    )
}

export default Encabezado
