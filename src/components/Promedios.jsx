import React from 'react';

function Calculos({ Notas, Actividades, Tipo }) {
    let promedio = 0;
    let porcentaje = 0;
    let cantidad = 0;

    for (let i = 0; i < Actividades.length; i++) {
        if (Actividades[i].Tipo === Tipo ) {
            cantidad++;
        }
    }

    for (let i = 0; i < Actividades.length; i++) {
        if ((typeof Notas[i] === "number") && (Actividades[i].Tipo === Tipo )) {
            promedio = promedio + Notas[i];
            porcentaje++;
        }
    }
    promedio = promedio / cantidad;
    porcentaje = 100 * porcentaje / cantidad;


if (Tipo === "actividad") {
    return (
        <div>
            <h2><strong>Actividades</strong></h2>
            <p><strong>Porcentaje de entrega:</strong>  %{porcentaje.toFixed(2)}</p>
            <p><strong>Promedio de Actividades:</strong>  {promedio.toFixed(2)}   </p>
        </div>
    )
}
if (Tipo === "evaluacion") {
      return (
        <div>
            <h2><strong>Evaluaciones</strong></h2>
            <p><strong>Porcentaje de realización:</strong>  %{porcentaje.toFixed(2)}</p>
            <p><strong>Promedio de Evaluaciones:</strong>  {promedio.toFixed(2)}   </p>
        </div>
    )  
}
}



function Promedios({ Alumnos, Actividades}) {
    return (
        <div className='div-promedios'>
            {Alumnos.map((alumno, index) => (
                <div className="div-alumnos">
                    <h1>{alumno.Nombre}</h1>
                    <Calculos Notas={alumno.Notas} Actividades={Actividades} Tipo="actividad"/>
                    <Calculos Notas={alumno.Notas} Actividades={Actividades} Tipo="evaluacion"/>

                </div>
            )
            )};
        </div>
    )
}
export default Promedios;

