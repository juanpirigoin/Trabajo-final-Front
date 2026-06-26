import React from 'react';
import useGetAlumnos from "../hooks/useGetAlumnos";
import useGetNotas from '../hooks/useGetNotas';
import Calculos from './Calculos';

function NotasCards() {
  const { error, loading, alumnos = [] } = useGetAlumnos();
  const { error: errorNotas, loading: loadingNotas, notas = [] } = useGetNotas();

  if (loading) return <p className="status-msg">Cargando alumnos...</p>;
  if (error) return <p className="status-msg">Error: {error.message}</p>;
  if (!alumnos.length) return <p className="status-msg">No hay registros</p>;

  if (loadingNotas) return <p className="status-msg">Cargando notas...</p>;
  if (errorNotas) return <p className="status-msg">Error: {errorNotas.message}</p>;
  if (!notas.length) return <p className="status-msg">No hay registros de notas</p>;

  return (
    <>
      {alumnos.map((alumno) => (
        <div key={alumno.IdAlumno} className="nota-card">
          <h2>{alumno.Nombre} {alumno.Apellido}</h2>
          <Calculos Notas={notas} IdAlumno={alumno.IdAlumno} />
        </div>
      ))}
    </>
  );
}

export default NotasCards;
