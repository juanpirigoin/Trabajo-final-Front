import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Header.css";

function Header() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-brand" end>
        {/* <i className="fa-solid fa-school navbar-logo-icon"></i> */}
        <span className="navbar-brand-name">Sistema de Gestión de Curso</span>
      </NavLink>

      <nav>
        <ul className="navbar-links">
          <li>
            <NavLink to="/actividades" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <i className="fa-solid fa-list-ul"></i>
              Actividades
            </NavLink>
          </li>
          <li>
            <NavLink to="/alumnos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <i className="fa-solid fa-graduation-cap"></i>
              Alumnos
            </NavLink>
          </li>
          <li>
            <NavLink to="/asistencia" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <i className="fa-solid fa-calendar-check"></i>
              Asistencia
            </NavLink>
          </li>
          <li>
            <NavLink to="/notas" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <i className="fa-solid fa-file-invoice"></i>
              Notas
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
