import React, { useState } from "react";
import "../styles/global.css";
import "../styles/alumno-page.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import ActividadesCards from "../components/actividades/ActividadesCards";
import CreateActividadForm from "../components/actividades/CreateActividadForm";

function ActividadesPage() {
    const [titulo, setTitulo] = useState("");
    const [mostrarListaActividades, setMostrarListaActividades] = useState(false);
    const [mostrarAgregarActividad, setMostrarAgregarActividad] = useState(false);

    const MostrarListaActividades = () => {
        setMostrarListaActividades(true);
        setMostrarAgregarActividad(false);
        setTitulo("Lista de actividades");
    };

    const AgregarActividad = () => {
        setMostrarListaActividades(false);
        setMostrarAgregarActividad(true);
        setTitulo("Agregar actividad");
    };

    const botones = [
        { nombre: "Ver Actividades", onClick: MostrarListaActividades },
        { nombre: "Agregar Actividad", onClick: AgregarActividad }
    ];

    return (
        <div className="page-layout">
            <CajaBotones Botones={botones} />
            <div className="page-content">
                <Encabezado claseIcono="fa-solid fa-graduation-cap" titulo={titulo || "Actividades"} />
                {mostrarListaActividades && <ActividadesCards />}
                {mostrarAgregarActividad && <CreateActividadForm />}
            </div>
        </div>
    );
}

export default ActividadesPage;
