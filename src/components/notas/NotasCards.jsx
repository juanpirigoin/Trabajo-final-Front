import React from 'react';
import useGetAlumnos from "../../hooks/alumnos/useGetAlumnos";
import useGetNotas from '../../hooks/notas/useGetNotas';
import useGetUnidades from '../../hooks/unidades/useGetUnidades';
import useGetActividades from '../../hooks/actividades/useGetActividades';
import CrearCalculos from './CrearCalculos';

function NotasCards() {

  // LLamado a Los GET de informacion: Alumnos, notas y unidades
  const { error, loading, alumnos = [] } = useGetAlumnos();
  const { error: errorNotas, loading: loadingNotas, notas = [] } = useGetNotas();
  const { error: errorUnidades, loading: loadingUnidades, unidades = [] } = useGetUnidades();
  const { error: errorActividades, loading: loadingActividades, actividades = [] } = useGetActividades();

  if (loading) return <p className="status-msg">Cargando alumnos...</p>;
  if (error) return <p className="status-msg">Error: {error.message}</p>;
  if (!alumnos.length) return <p className="status-msg">No hay registros</p>;

  if (loadingNotas) return <p className="status-msg">Cargando notas...</p>;
  if (errorNotas) return <p className="status-msg">Error: {errorNotas.message}</p>;
  if (!notas.length) return <p className="status-msg">No hay registros de notas</p>;

  if (loadingUnidades) return <p className="status-msg">Cargando unidades...</p>;
  if (errorUnidades) return <p className="status-msg">Error: {errorUnidades.message}</p>;
  if (!unidades.length) return <p className="status-msg">No hay registros de unidades</p>;

  if (loadingActividades) return <p className="status-msg">Cargando actividades...</p>;
  if (errorActividades) return <p className="status-msg">Error: {errorActividades.message}</p>;
  if (!actividades.length) return <p className="status-msg">No hay registros de actividades</p>;


  
  return (
    <>
      {alumnos.map((alumno) => (
        <div key={alumno.IdAlumno} className="nota-card">
          <h2>{alumno.Nombre} {alumno.Apellido}</h2>
          {unidades.map((unidad) => (
            <div key={unidad.IdUnidad} className="unidad-card">
              <h3>{unidad.NombreUnidad}</h3>
              <CrearCalculos Notas={notas} Actividades={actividades} IdAlumno={alumno.IdAlumno} IdUnidad={unidad.IdUnidad}/>
            </div>
          ))}
                    
        </div>
      ))}
    </>
  );
}

export default NotasCards;
