import React, { useState } from "react";
import "../styles/global.css";
import "../styles/asistencia-page.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import AsistenciaCards from "../components/asistencia/AsistenciaCards";
import TomarAsistenciaCards from "../components/asistencia/TomarAsistenciaCards";

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
