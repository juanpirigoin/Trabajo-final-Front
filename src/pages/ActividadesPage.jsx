import React, { useState } from "react";
import alumnos from "../assets/alumnos.png";
import "../styles/global.css";
import "../styles/AlumnoPage.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import AlumnoCards from "../components/AlumnoCards";
import CreateAlumnoForm from "../components/CreateAlumnoForm";
import ModificarAlumno from "../components/ModificarAlumno";

function ActividadesPage() {
  const [mostrarActividades, setMostrarActividades] = useState(false);
  
  const MostrarActividades = () => {
    setMostrarActividades(true);
    setTitulo("Actividades");
  };

  const AgregarActividad = () => {
    setMostrarActividades(false);
    setTitulo("Agregar actividad");
  };

  const botones = [
    { nombre: "Ver Actividades", onClick: () => MostrarActividades() },
    { nombre: "Agregar Actividad", onClick: () => AgregarActividad() }
  ];

  return (
    <div className="page-layout">
      <CajaBotones Botones={botones} />
      <div className="page-content">
        <Encabezado claseIcono="fa-solid fa-graduation-cap" titulo={titulo || "Actividades"} />
        
        
        {mostrarAlumnos && <AlumnoCards onEditar={EditarAlumno} />}
        {crearAlumno && (
          <div className="modificar-form-wrapper">
            <CreateAlumnoForm />
          </div>
        )}


      </div>
    </div>
  );
}

export default ActividadesPage;
