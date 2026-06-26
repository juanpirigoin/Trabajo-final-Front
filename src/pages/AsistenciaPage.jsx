import React, { useState } from "react";
import calendario from "../assets/calendario.png";
import "../styles/global.css";
import "../styles/AsistenciaPage.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import AsistenciaCards from "../components/AsistenciaCards";
import TomarAsistenciaCards from "../components/TomarAsistenciaCards";

function AsistenciaPage() {
  const [mostrarAsistencia, setMostrarAsistencia] = useState(false);
  const [tomarAsistencia, setTomarAsistencia] = useState(false);

  const MostrarAsistencia = () => {
    setMostrarAsistencia(true);
    setTomarAsistencia(false);
  };

  const TomarAsistencia = () => {
    setMostrarAsistencia(false);
    setTomarAsistencia(true);
  };

  const botones = [
    { nombre: "Ver Asistencias", onClick: () => MostrarAsistencia() },
    { nombre: "Tomar Asistencia", onClick: () => TomarAsistencia() }
  ];

  return (
    <div className="page-layout">
      <CajaBotones Botones={botones} />
      <div className="page-content">
        <Encabezado claseIcono="fa-solid fa-calendar-check" titulo="Asistencia" />
        {mostrarAsistencia && <AsistenciaCards />}
        {tomarAsistencia && <TomarAsistenciaCards />}
      </div>
    </div>
  );
}

export default AsistenciaPage;
