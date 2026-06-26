import React from 'react'
import useGetAlumnos from "./hooks/useGetAlumnos";
import useGetNotas from './hooks/useGetNotas';//modificar a notas
import Calculos from './Calculos';

function NotasCards() {

  const { error, loading, alumnos = [] } = useGetAlumnos();
  const { error: errorNotas, loading: loadingNotas, notas = [] } = useGetNotas();

  if (loading) return <p>Cargando alumnos...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!alumnos.length) return <p>No hay registros</p>;



  if (loadingNotas) return <p>Cargando notas...</p>;
  if (errorNotas) return <p>Error: {error.message}</p>;
  if (!notas.length) return <p>No hay registros</p>

  return (
    <>
      {alumnos.map((alumno) => (
        <div key={alumno.IdAlumno} className="div-alumno">
          <h2>{alumno.Nombre} {alumno.Apellido}</h2>
          <Calculos Notas={notas} IdAlumno={alumno.IdAlumno}/>
        </div>
      ))}
    </>
  )
}

export default NotasCards
