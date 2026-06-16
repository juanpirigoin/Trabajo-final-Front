import React from 'react';
import "../styles/nav.css";

function Nav() {
  return (
    <div className='navbar'>
      <i className="fa-solid fa-school" style={{ color: "rgb(65, 0, 255)", display: "block" }}></i>
      <ul>
        <li>Alumnos</li>
        <li>Asistencia</li>
        <li>Notas</li>
        <li>Agenda</li>
      </ul>
    </div>
  )
}

export default Nav
