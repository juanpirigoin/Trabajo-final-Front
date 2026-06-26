import React, { useState } from "react";
import alumnos from "../assets/alumnos.png";
import "../styles/global.css";
import "../styles/AlumnoPage.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import AlumnoCards from "../components/AlumnoCards";
import CreateAlumnoForm from "../components/CreateAlumnoForm";
import ModificarAlumno from "../components/ModificarAlumno";

function AlumnoPage() {
  const [mostrarAlumnos, setMostrarAlumnos] = useState(false);
  const [crearAlumno, setCrearAlumno] = useState(false);
  const [modificarAlumno, setModificarAlumno] = useState(false);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);
  const [titulo, setTitulo] = useState("");

  const MostrarAlumnos = () => {
    setMostrarAlumnos(true);
    setTitulo("Alumnos");
    setCrearAlumno(false);
    setModificarAlumno(false);
  };

  const AgregarAlumnos = () => {
    setMostrarAlumnos(false);
    setTitulo("Agregar alumno");
    setCrearAlumno(true);
    setModificarAlumno(false);
  };

  const EditarAlumno = (alumno) => {
    setAlumnoSeleccionado(alumno);
    setMostrarAlumnos(false);
    setCrearAlumno(false);
    setModificarAlumno(true);
    setTitulo("Modificar alumno");
  };

  const botones = [
    { nombre: "Ver Alumnos", onClick: () => MostrarAlumnos() },
    { nombre: "Agregar Alumno", onClick: () => AgregarAlumnos() }
  ];

  return (
    <div className="page-layout">
      <CajaBotones Botones={botones} />
      <div className="page-content">
        <Encabezado claseIcono="fa-solid fa-graduation-cap" titulo={titulo || "Alumnos"} />
        {mostrarAlumnos && <AlumnoCards onEditar={EditarAlumno} />}
        {crearAlumno && (
          <div className="modificar-form-wrapper">
            <CreateAlumnoForm />
          </div>
        )}
        {modificarAlumno && alumnoSeleccionado && (
          <ModificarAlumno
            alumno={alumnoSeleccionado}
            onClose={() => setModificarAlumno(false)}
          />
        )}
      </div>
    </div>
  );
}

export default AlumnoPage;
