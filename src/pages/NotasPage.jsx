import React, { useState } from "react";
import "../styles/global.css";
import "../styles/notas-page.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import NotasCards from "../components/notas/NotasCards";
import CreateNotaForm from "../components/notas/CreateNotaForm.jsx";

function NotasPage() {
  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [mostrarAgregarNota, setMostrarAgregarNota] = useState(false);
  const [titulo, setTitulo] = useState("");

  const MostrarNotas = () => {
    setMostrarNotas(true);
    setMostrarAgregarNota(false);
    setTitulo("Notas");
  };

  const AgregarNotas = () => {
    setMostrarAgregarNota(true);
    setMostrarNotas(false);
    setTitulo("Agregar Nota");
  };

  const botones = [
    { nombre: "Ver Notas", onClick: () => MostrarNotas() },
    { nombre: "Agregar Nota", onClick: () => AgregarNotas() }
  ];

  return (
    <div className="page-layout">
      <CajaBotones Botones={botones} />
      <div className="page-content">
        <Encabezado claseIcono="fa-solid fa-file-invoice" titulo={titulo || "Notas"} />
        {mostrarNotas && <NotasCards />}
        {mostrarAgregarNota && <div className="modificar-form-wrapper">
            <CreateNotaForm />
          </div>}
      </div>
    </div>
  );
}

export default NotasPage;
