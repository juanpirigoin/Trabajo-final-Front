import React from "react";
import useGetAlumnos from "../../hooks/alumnos/useGetAlumnos";
import useDeleteAlumno from "../../hooks/alumnos/useDeleteAlumno";

function AlumnoCards({ onEditar }) {
  const { error, loading, alumnos = [], getAlumnos } = useGetAlumnos();
  const { error: errorDelete, deleteAlumno } = useDeleteAlumno();

  if (loading) return <p className="status-msg">Cargando alumnos...</p>;
  if (error) return <p className="status-msg">Error: {error.message}</p>;
  if (!alumnos.length) return <p className="status-msg">No hay registros</p>;

  async function eliminarAlumno(alumno) {
    const ok = window.confirm(`¿Eliminar a ${alumno.Nombre} ${alumno.Apellido}?`);
    if (ok) {
      const result = await deleteAlumno(alumno.IdAlumno);
      if (result?.status === "success") {
        await getAlumnos();
      } else {
        alert("Error al eliminar");
      }
    }
  }

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
          <button className="btn-danger btn-editar" onClick={() => eliminarAlumno(alumno)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default AlumnoCards;
