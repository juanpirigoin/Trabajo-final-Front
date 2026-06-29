import React from 'react';

function CajaBotones({ Botones }) {
  return (
    <div className="sidebar">
        {Botones.map((boton, index) => (
        <button className="btn" key={index} onClick={boton.onClick}>
          {boton.nombre}
        </button>
      ))}
    </div>
  );
}

export default CajaBotones;