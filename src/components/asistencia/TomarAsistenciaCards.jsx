import React, { useState, useEffect } from 'react';
import useGetAsistencias from "../../hooks/asistencias/useGetAsistencias";
import usePostAsistencias from "../../hooks/asistencias/usePostAsistencias";
import FechaActual from '../../utils/FechaActual';
import useGetAlumnos from "../../hooks/alumnos/useGetAlumnos";

function TomarAsistenciaCards() {
  const { error: errorGet, loading, asistencias = [] } = useGetAsistencias();
  const { postAsistencia, error: errorPost } = usePostAsistencias();
  const { error: errorAlumnos, loading: loadingAlumnos, alumnos = [] } = useGetAlumnos();

  const hoy = FechaActual();
  const [dd, mm, yyyy] = hoy.split("/");
  const hoyInput = `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;

  const [fecha, setFecha] = useState(hoyInput);
  const [alumnosPendientes, setAlumnosPendientes] = useState(
    [...new Set(asistencias.map(a => a.IdAlumno))]
  );

  useEffect(() => {
    if (alumnos.length) {
      setAlumnosPendientes([...new Set(alumnos.map(a => a.IdAlumno))]);
    }
  }, [alumnos]);

  if (loadingAlumnos) return <p className="status-msg">Cargando alumnos...</p>;
  if (errorAlumnos) return <p className="status-msg">Error: {errorAlumnos.message}</p>;
  if (!alumnos.length) return <p className="status-msg">No hay registros</p>;
  if (loading) return <p className="status-msg">Cargando asistencias...</p>;
  if (errorGet) return <p className="status-msg">Error: {errorGet.message}</p>;
  if (!asistencias.length) return <p className="status-msg">No hay registros</p>;

  const marcarAsistencia = async (idAlumno, estado) => {
    const registro = { IdAlumno: idAlumno, Fecha: fecha, Estado: estado };
    const success = await postAsistencia(registro);
    if (success) {
      // alert(`Alumno ${idAlumno} marcado como ${estado}`);
      setAlumnosPendientes(prev => prev.filter(id => id !== idAlumno));
    }
  };

  return (
    <>
      {/* Selector de fecha */}
      <div className="fecha-selector">
        <label>Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      {/* Lista de alumnos pendientes */}
      {alumnosPendientes.map((idAlumno) => (
        <div key={idAlumno} id={`alumno-${idAlumno}`} className="asistencia-card">
          <div className="asistencia-icons">
            <i
              onClick={() => marcarAsistencia(idAlumno, "presente")}
              className="fa-solid fa-check icon-presente"
            ></i>
            <i
              onClick={() => marcarAsistencia(idAlumno, "ausente")}
              className="fa-solid fa-x icon-ausente"
            ></i>
          </div>
          <p>{alumnos.find((a) => a.IdAlumno === idAlumno)?.Nombre} {alumnos.find((a) => a.IdAlumno === idAlumno)?.Apellido}</p>
        </div>
      ))}
    </>
  );
}

export default TomarAsistenciaCards;