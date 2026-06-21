import React from 'react'
import useGetAsistencias from "../components/hooks/useGetAsistencias";
import  CambiarFormatoFecha  from "../funciones/CambiarFormatoFecha";

function AsistenciaCards() {
  const { error, loading, asistencias = [] } = useGetAsistencias();

  if (loading) return <p>Cargando asistencias...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!asistencias.length) return <p>No hay registros</p>;
// console.log(asistencias)
  const listaIdAlumnos = [...new Set(asistencias.map(a => a.IdAlumno))];
  const listaFechas = [...new Set(asistencias.map(a => a.Fecha))];
  
  return (
    <>
    <div className='div-alumno fechas'>
      <p>Fechas:</p>
      <ul>
        {listaFechas.map((fecha, index) => (
          <li key={index}>
            <CambiarFormatoFecha fechaYMD={fecha} />
          </li>         
        ))}
      </ul>
    </div>
    
    {/* lista de divs con las asistencias de los alumnos   */}

    {listaIdAlumnos.map((idAlumno) => (
        <div key={idAlumno} id={`alumno-${idAlumno}`} className="div-alumno">
          <p>Alumno {idAlumno}</p>
          <ul>
            {listaFechas.map((fecha) => {
              const registro = asistencias.find(
                (a) => a.IdAlumno === idAlumno && a.Fecha === fecha
              );
              return (
                <li key={fecha}>
                  {registro ? (
                    registro.Estado === "presente"
                      ? <i className="fa-solid fa-check" style={{ color: "rgb(28,255,0)" }}></i>
                      : <i className="fa-solid fa-x" style={{ color: "rgb(255,0,0)" }}></i>
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