import React from 'react';
import useGetAsistencias from "../../hooks/asistencias/useGetAsistencias.jsx";
import useGetAlumnos from "../../hooks/alumnos/useGetAlumnos.jsx";
import FormatoFechaDDMM from "../../utils/FormatoFechaDDMM.js";
import PorcentajeAsistencia from './PorcentajeAsistencia.jsx';


function AsistenciaCards() {
  const { error, loading, asistencias = [] } = useGetAsistencias();
  const { error: errorAlumnos, loading: loadingAlumnos, alumnos = [] } = useGetAlumnos();

  if (loading) return <p className="status-msg">Cargando asistencias...</p>;
  if (error) return <p className="status-msg">Error: {error.message}</p>;
  if (!asistencias.length) return <p className="status-msg">No hay registros</p>;
  if (loadingAlumnos) return <p className="status-msg">Cargando alumnos...</p>;
  if (errorAlumnos) return <p className="status-msg">Error: {errorAlumnos.message}</p>;
  if (!alumnos.length) return <p className="status-msg">No hay registros</p>;

  const listaIdAlumnos = [...new Set(asistencias.map(a => a.IdAlumno))];
  const listaFechas = [...new Set(asistencias.map(a => a.Fecha))];
  // console.log(listaFechas)

  //ordeno las fechas  y guardo las ultimas 10
  const fechasOrdenadas = listaFechas.sort((a, b) => new Date(a) - new Date(b));
  const ultimasFechas = fechasOrdenadas.slice(-10);

  return (
    <>
      {/* Barra de fechas sticky */}
      <div className="fechas-bar">
        <p>Fechas:</p>
        <ul>
          {ultimasFechas.map((fecha, index) => (
            <li key={index}>{FormatoFechaDDMM(fecha)}</li>
          ))}
        </ul>
      </div>

      {/* Historial de asistencia por alumno */}
      {listaIdAlumnos.map((idAlumno) => (
        <div key={idAlumno} id={`alumno-${idAlumno}`} className="historial-card">
          <p>{alumnos.find((a) => a.IdAlumno === idAlumno)?.Nombre} {alumnos.find((a) => a.IdAlumno === idAlumno)?.Apellido}</p>
          <ul>
            {ultimasFechas.map((fecha) => {
              const registro = asistencias.find(
                (a) => a.IdAlumno === idAlumno && a.Fecha === fecha
              );
              return (
                <li key={fecha}>
                  {registro ? (
                    registro.Estado === "presente"
                      ? <i className="fa-solid fa-check" style={{ color: "var(--color-success)" }}></i>
                      : <i className="fa-solid fa-x" style={{ color: "var(--color-danger)" }}></i>
                  ) : "-"}
                </li>
              );
            })}
          </ul>
          <PorcentajeAsistencia ListaFechas={listaFechas} Asistencias={asistencias} IdAlumno={idAlumno} />
        </div>
      ))}
    </>
  );
}

export default AsistenciaCards;