import React, { useState } from "react";
import alumnos from "../assets/alumnos.png";
import "../styles/global.css";
import "../styles/NotasPage.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import NotasCards from "../components/NotasCards";

function NotasPage() {
  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [titulo, setTitulo] = useState("");

  const MostrarNotas = () => {
    setMostrarNotas(true);
    setTitulo("Notas");
  };

  const botones = [
    { nombre: "Ver Notas", onClick: () => MostrarNotas() }
  ];

  return (
    <div className="page-layout">
      <CajaBotones Botones={botones} />
      <div className="page-content">
        <Encabezado claseIcono="fa-solid fa-file-invoice" titulo={titulo || "Notas"} />
        {mostrarNotas && <NotasCards />}
      </div>
    </div>
  );
}

export default NotasPage;
