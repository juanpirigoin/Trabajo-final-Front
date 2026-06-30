import React from 'react';


function PorcentajeAsistencia({ ListaFechas, Asistencias, IdAlumno }) {

  const asistenciasAlumno = Asistencias.filter(asistencia => asistencia.IdAlumno === IdAlumno);
  let presente = 0;
  let ausente = 0;

  asistenciasAlumno.forEach(asistencia => {
    if (asistencia.Estado === "presente") {
      presente++;
    }
  });

  const porcentajePresente = (presente / ListaFechas.length) * 100;

  const colorAsistencia =
    porcentajePresente >= 70 ? "buena" : porcentajePresente >= 50 ? "regular" : "mala";

  return (
      <p className={`nota-stat-value ${colorAsistencia}`} style={{ textAlign: "right" }}>
        {porcentajePresente.toFixed(2)}%
      </p>
  )

}

export default PorcentajeAsistencia