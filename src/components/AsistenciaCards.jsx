import React from 'react';
import useGetAsistencias from "../hooks/asistencias/useGetAsistencias.jsx";
import useGetAlumnos from "../hooks/alumnos/useGetAlumnos.jsx";
import cambiarFormatoFecha from "../utils/CambiarFormatoFecha.js";

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

  return (
    <>
      {/* Barra de fechas sticky */}
      <div className="fechas-bar">
        <p>Fechas:</p>
        <ul>
          {listaFechas.map((fecha, index) => (
            <li key={index}>{cambiarFormatoFecha(fecha)}</li>
          ))}
        </ul>
      </div>

      {/* Historial de asistencia por alumno */}
      {listaIdAlumnos.map((idAlumno) => (
        <div key={idAlumno} id={`alumno-${idAlumno}`} className="historial-card">
          <p>{alumnos.find((a) => a.IdAlumno === idAlumno)?.Nombre} {alumnos.find((a) => a.IdAlumno === idAlumno)?.Apellido}</p>
          <ul>
            {listaFechas.map((fecha) => {
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
        </div>
      ))}
    </>
  );
}

export default AsistenciaCards;