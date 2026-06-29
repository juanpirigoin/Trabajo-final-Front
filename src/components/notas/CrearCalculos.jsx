import React from "react";

function CrearCalculos({ Notas, Actividades, IdAlumno, IdUnidad }) {
  
  const actividadesUnidad = Actividades.filter(a => a.IdUnidad === IdUnidad);  
  console.log(` "actividades de la unidad: " ${actividadesUnidad}`)
    
  
  const notasAlumno = Notas.filter(n => n.IdAlumno === IdAlumno); 
  console.log(`"notas del alumno: " ${notasAlumno}`);
  let promedio = 0;
  let porcentaje = 0; 

  actividadesUnidad.forEach(actividad => {
    const nota = notasAlumno.find(n => n.IdActividad === actividad.IdActividad); 
    if (nota && typeof nota.Nota === "number") {
      promedio += nota.Nota;
      porcentaje ++;
    } 
  }); 

  promedio = promedio / actividadesUnidad.length;
  porcentaje = (porcentaje / actividadesUnidad.length) * 100;

  // Color dinámico según el promedio
  const colorPromedio =
    promedio >= 7 ? "buena" : promedio >= 5 ? "regular" : "mala";

  return (
    <div className="nota-stats">
      <div className="nota-stat-item">
        <strong>Promedio</strong>
        <span className={`nota-stat-value ${colorPromedio}`}>
          {promedio.toFixed(2)}
        </span>
      </div>
      <div className="nota-stat-item">
        <strong>Entrega</strong>
        <span className="nota-stat-value">
          {porcentaje.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}

export default CrearCalculos;