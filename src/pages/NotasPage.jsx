import React, { useState } from "react";
import alumnos from "../assets/alumnos.png";
import "../styles/AlumnoPage.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import FechaActual from "../funciones/FechaActual";
import NotasCards from "../components/NotasCards";


function NotasPage() {
  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [cargarNotas, setCargarNotas] = useState(false);

  // const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const [titulo, setTitulo] = useState("");

  const MostrarNotas = () => {
    setMostrarNotas(true);
    setTitulo("Notas");
    setCargarNotas(false);
  };

  const CargarNotas = () => {
    setMostrarNotas(false);
    setTitulo("Agregar Notas");
    setCargarNotas(true);
  };


  const botones = [
    { nombre: "Mostrar Notas", onClick: () => MostrarNotas() },
    { nombre: "Agregar Notas", onClick: () => CargarNotas() }
  ];

  return (
    <div className="contenedor">
      <CajaBotones Botones={botones} />
      <div className="contenedor-alumnos">
        <Encabezado srcimagen={alumnos} titulo={titulo} />

        <NotasCards />

      </div>
    </div>
  );
}

export default NotasPage;
