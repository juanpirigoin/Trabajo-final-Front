import React, { useState } from "react";
import alumnos from "../assets/alumnos.png";
import "../styles/AlumnoPage.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import FechaActual from "../funciones/FechaActual";
import AlumnoCards from "../components/AlumnoCards";
import CreateAlumnoForm from "../components/CreateAlumnoForm";



function AlumnoPage() {
  const [mostrarAlumnos, setMostrarAlumnos
  ] = useState(false)
  const [crearAlumno, setCrearAlumno
  ] = useState(false)
  const [titulo, setTitulo] = useState("")

  const MostrarAlumnos = () => {
    setMostrarAlumnos(true);
    setTitulo("Alumnos")
    setCrearAlumno(false);
  }

  const AgregarAlumnos = () => {
    setMostrarAlumnos(false);
    setTitulo("Agregar alumno")
    setCrearAlumno(true);
  }


  const botones = [
    { nombre: "Mostrar Alumnos", onClick: () => MostrarAlumnos() },
    { nombre: "Agregar Alumno", onClick: () => AgregarAlumnos() }
  ];

  return (
    <div className="contenedor">
      <CajaBotones Botones={botones} />
      <div className="contenedor-alumnos">
        <Encabezado srcimagen={alumnos} titulo={titulo} />
        {mostrarAlumnos&&<AlumnoCards/>}
        {crearAlumno&&<CreateAlumnoForm/>}
      </div>
    </div>
  );
}

export default AlumnoPage
