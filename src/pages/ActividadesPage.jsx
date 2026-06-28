import React, { useState } from "react";
import "../styles/global.css";
import "../styles/AlumnoPage.css";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import useGetActividades from "../hooks/actividades/useGetActividades";
import useGetUnidades from "../hooks/unidades/useGetUnidades";
import ActividadesCards from "../components/ActividadesCards";

function ActividadesPage() {

    const [titulo, setTitulo] = useState("");
    const [mostrarListaActividades, setMostrarListaActividades] = useState(false);

    const MostrarListaActividades = () => {
        setMostrarListaActividades(true);
        setTitulo("Lista de actividades");
    };

    const AgregarActividad = () => {
        setMostrarListaActividades(false);
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
            </div>
        </div>
    );
}

export default ActividadesPage;
