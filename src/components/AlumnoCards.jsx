import React from "react";
import useGetAlumnos from "../hooks/useGetAlumnos";

function AlumnoCards({ onEditar }) {
  const { error, loading, alumnos = [] } = useGetAlumnos();

  if (loading) return <p className="status-msg">Cargando alumnos...</p>;
  if (error) return <p className="status-msg">Error: {error.message}</p>;
  if (!alumnos.length) return <p className="status-msg">No hay registros</p>;

  return (
    <div className="alumnos-grid">
      {alumnos.map((alumno) => (
        <div key={alumno.IdAlumno} className="alumno-card">
          <img src={alumno.Foto} alt="Foto de alumno" className="img-alumno" />
          <div className="alumno-info">
            <h2>{alumno.Nombre} {alumno.Apellido}</h2>
            <p>DNI: {alumno.DNI}</p>
            <p>Curso: {alumno.IdCurso}</p>
          </div>
          <button className="btn-editar" onClick={() => onEditar(alumno)}>Editar</button>
        </div>
      ))}
    </div>
  );
}

export default AlumnoCards;
