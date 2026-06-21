import React from 'react'; 

function CambiarFormatoFecha({ fechaYMD }) {
    const dateObj = new Date(fechaYMD);

  // Formato argentino: DD/MM/YYYY
  const formato = dateObj.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    // year: "numeric"
  });

  return <span>{formato}</span>;
}
export default CambiarFormatoFecha