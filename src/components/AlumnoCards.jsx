import React from "react";
import useGetAlumnos from "./hooks/useGetAlumnos";

function AlumnoCards({ onEditar }) {
  const { error, loading, alumnos = [] } = useGetAlumnos();

  if (loading) return <p>Cargando alumnos...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!alumnos.length) return <p>No hay registros</p>;

  return (
    <>
      {alumnos.map((alumno) => (
        <div key={alumno.IdAlumno} className="div-alumno">
          <img src={alumno.Foto} alt="Foto de alumno" />
          <div>
            <h2>{alumno.Nombre} {alumno.Apellido}</h2>
            <p>DNI: {alumno.DNI}</p>
            <p>Curso: {alumno.IdCurso}</p>
            <button onClick={() => onEditar(alumno)}>Editar</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AlumnoCards;

