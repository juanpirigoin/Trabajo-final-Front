import React from 'react';
import "../styles/header.css";

function Header() {
  return (
    <header>
    <div className='navbar'>
      <i className="fa-solid fa-school" style={{ color: "rgb(65, 0, 255)", display: "block" }}></i>
      <ul>
        <li>Alumnos</li>
        <li>Asistencia</li>
        <li>Notas</li>
        <li>Agenda</li>
      </ul>
    </div>
    </header>
  )
}

export default Header
