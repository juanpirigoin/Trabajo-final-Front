import React, { useState, useEffect } from 'react'
import useGetAsistencias from "./hooks/useGetAsistencias";
import usePostAsistencias from "./hooks/usePostAsistencias";
import FechaActual from '../funciones/FechaActual';

function TomarAsistenciaCards() {
  const { error: errorGet, loading, asistencias = [] } = useGetAsistencias();
  const { postAsistencia, error: errorPost } = usePostAsistencias();


  const hoy = FechaActual(); // "19/06/2026"
  const [dd, mm, yyyy] = hoy.split("/"); // ["19","06","2026"]

  const hoyInput = `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;

  const [fecha, setFecha] = useState(hoyInput);

  // Lista inicial de alumnos pendientes
  const [alumnosPendientes, setAlumnosPendientes] = useState(
    [...new Set(asistencias.map(a => a.IdAlumno))]
  );

  useEffect(() => {
    if (asistencias.length) {
      setAlumnosPendientes([...new Set(asistencias.map(a => a.IdAlumno))]);
    }
  }, [asistencias]);

  if (loading) return <p>Cargando asistencias...</p>;
  if (errorGet) return <p>Error: {errorGet.message}</p>;
  if (!asistencias.length) return <p>No hay registros</p>;

  const marcarAsistencia = async (idAlumno, estado) => {
    const registro = {
      IdAlumno: idAlumno,
      Fecha: fecha,
      Estado: estado,
    };

    const success = await postAsistencia(registro);
    if (success) {
      alert(`Alumno ${idAlumno} marcado como ${estado}`);
      // 🔎 Eliminar el alumno de la lista pendiente
      setAlumnosPendientes(prev => prev.filter(id => id !== idAlumno));
    }
  };

  return (
    <>
      <div className='div-alumno'>
        <label>Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      {/* lista de divs con las asistencias de los alumnos */}
      {alumnosPendientes.map((idAlumno) => (
        <div key={idAlumno} id={`alumno-${idAlumno}`} className='div-alumno corto'>
          <i
            onClick={() => marcarAsistencia(idAlumno, "presente")}
            className="fa-solid fa-check"
            style={{ color: "rgb(28,255,0)", cursor: "pointer" }}
          ></i>
          <i
            onClick={() => marcarAsistencia(idAlumno, "ausente")}
            className="fa-solid fa-x"
            style={{ color: "rgb(255,0,0)", cursor: "pointer" }}
          ></i>
          <p>Alumno {idAlumno}</p>
        </div>
      ))}
    </>
  );
}

export default TomarAsistenciaCards;