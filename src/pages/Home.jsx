import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-dashboard">
      <div className="welcome-banner">
        <h1>Sistema de Gestión de Curso</h1>
        <p>Bienvenido al panel de administración. Seleccione una de las siguientes opciones para comenzar:</p>
      </div>

      <div className="dashboard-cards">
        <Link to="/alumnos" className="card-link">
          <div className="dashboard-card">
            <i className="fa-solid fa-graduation-cap card-icon"></i>
            <h3>Gestión de Alumnos</h3>
            <p>Registrar, modificar e inspeccionar la lista de alumnos matriculados.</p>
          </div>
        </Link>

        <Link to="/asistencia" className="card-link">
          <div className="dashboard-card">
            <i className="fa-solid fa-calendar-check card-icon"></i>
            <h3>Control de Asistencia</h3>
            <p>Tomar la asistencia del día y revisar el historial de presentismo.</p>
          </div>
        </Link>

        <Link to="/notas" className="card-link">
          <div className="dashboard-card">
            <i className="fa-solid fa-file-invoice card-icon"></i>
            <h3>Registro de Notas</h3>
            <p>Cargar calificaciones y visualizar el rendimiento académico.</p>
          </div>
        </Link>

        <Link to="/actividades" className="card-link">
          <div className="dashboard-card">
            <i className="fa-solid fa-list-ul card-icon"></i>
            <h3>Gestión de Actividades</h3>
            <p>Crear, modificar y gestionar las actividades.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
