import React from 'react'
// import useGetAlumnos from "./hooks/useGetAlumnos";
import CambiarFormatoFecha from "../funciones/CambiarFormatoFecha";
import useGetAlumnos from './hooks/useGetAlumnos';

function AlumnoCards() {

  const { error, loading, alumnos = [] } = useGetAlumnos();

  if (loading) return <p>Cargando alumnos...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!alumnos.length) return <p>No hay registros</p>;
  

  return (
    <>

      {/* lista de divs con los alumnos   */}

      {alumnos.map((alumno) => (
        <div key={alumno.IdAlumno} id={`alumno-${alumno.IdAlumno}`} className="div-alumno">
          <img src={alumno.Foto} alt="Foto de alumno" />
          <div>
            <h2>{alumno.Nombre} {alumno.Apellido}</h2>
            <p>DNI: {alumno.DNI}</p>
            <p>Curso: {alumno.IdCurso}</p>
          </div>

        </div>
      ))}
    </>
  );
}

export default AlumnoCards;