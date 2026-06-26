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
      const notaNum = Number(registro.Nota);
      sumaNotas += isNaN(notaNum) ? 0 : notaNum;
      entregadas++;
    }
  });

  const promedio = cantidadActividades > 0 ? sumaNotas / cantidadActividades : 0;
  const porcentaje = cantidadActividades > 0 ? (100 * entregadas) / cantidadActividades : 0;

  // Color dinámico según el promedio
  const colorPromedio =
    promedio >= 7 ? "buena" : promedio >= 5 ? "regular" : "mala";

  return (
    <div className="nota-stats">
      <div className="nota-stat-item">
        <strong>Promedio</strong>
        <span className={`nota-stat-value ${colorPromedio}`}>
          {promedio.toFixed(2)}
        </span>
      </div>
      <div className="nota-stat-item">
        <strong>Entrega</strong>
        <span className="nota-stat-value">
          {porcentaje.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}

export default Calculos;