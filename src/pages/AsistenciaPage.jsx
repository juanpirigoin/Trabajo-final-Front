import React, { useState } from "react";
import calendario from "../assets/calendario.png";
import "../styles/AsistenciaPage.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import FechaActual from "../funciones/FechaActual";
import AsistenciaCards from "../components/AsistenciaCards";
import TomarAsistenciaCards from "../components/TomarAsistenciaCards";


function AsistenciaPage() {
  const [mostrarAsistencia, setMostrarAsistencia] = useState(false)
 const [tomarAsistencia, setTomarAsistencia] = useState(false)

  const MostrarAsistencia = () => {
    setMostrarAsistencia(true);
    setTomarAsistencia(false);
  }

  const TomarAsistencia = () => {
    setMostrarAsistencia(false);
    setTomarAsistencia(true);
  }


  const botones = [
    { nombre: "Mostrar asistencias", onClick: () => MostrarAsistencia() },
    { nombre: "Tomar asistencia", onClick: () => TomarAsistencia() }
  ];

  return (
    <div className="contenedor">
      <CajaBotones Botones={botones} />
      <div className="contenedor-fechas">
        <Encabezado srcimagen={calendario} titulo="Asistencia" />
        {mostrarAsistencia&&<AsistenciaCards/>}
        {tomarAsistencia&&<TomarAsistenciaCards />}
      </div>
    </div>
  );
}

export default AsistenciaPage
