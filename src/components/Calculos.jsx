import React from "react";

function Calculos({ Notas, IdAlumno }) {
  const idActividades = [...new Set(Notas.map(a => a.IdActividad))];
  const cantidadActividades = idActividades.length;

  const notasAlumno = Notas.filter(n => n.IdAlumno === IdAlumno);

  let sumaNotas = 0;
  let entregadas = 0;

  idActividades.forEach(idAct => {
    const registro = notasAlumno.find(n => n.IdActividad === idAct);

    if (registro && registro.Nota !== "" && registro.Nota != null) {
      const notaNum = Number(registro.Nota); // convertir a número
      sumaNotas += isNaN(notaNum) ? 0 : notaNum;
      entregadas++;
    } else {
      sumaNotas += 0; // actividad no entregada cuenta como 0
    }
  });

  const promedio = cantidadActividades > 0 ? sumaNotas / cantidadActividades : 0;
  const porcentaje = cantidadActividades > 0 ? (100 * entregadas) / cantidadActividades : 0;

  return (
    <div>
      <p>
        <strong>Promedio Actividades: </strong>
        {promedio.toFixed(2)}
      </p>
      <p>
        <strong>Porcentaje de entrega: </strong>
        {porcentaje.toFixed(2)}%
      </p>
    </div>
  );
}

export default Calculos;