import React from 'react';
import "../styles/cajabotones.css";

function CajaBotones({ Botones }) {
  return (
    <div className='contenedor-botones'>
      {Botones.map((boton, index) => (
        <button className="boton" key={index} onClick={boton.onClick}>{boton.nombre}</button>
      ))}
    </div>
  );
}

export default CajaBotones;