import React, { useState } from "react";
import calendario from "../assets/calendario.png";
import "../styles/Asistencia.css";
import CargarFecha, { TomarAsistencia, CrearDivAlumno } from "../components/CargarAsistencia";

function Asistencia() {
  const fechaCustom = new Date().toISOString().split("T")[0];

  // Flags para mostrar/ocultar
  const [mostrarFechas, setMostrarFechas] = useState(false);
  const [mostrarTomar, setMostrarTomar] = useState(false);

  // Arrays de prueba
  const fechas = [
    "2026-06-06","2026-06-07","2026-06-08","2026-06-09","2026-06-10",
    "2026-06-11","2026-06-12","2026-06-13","2026-06-14","2026-06-15",
    "2026-06-16","2026-06-17","2026-06-18","2026-06-19","2026-06-20"
  ];

  const alumnos = [
    "Ana Rodríguez","Luis Fernández","Sofía Martínez","Javier Gómez","Valentina López",
    "Martín Herrera","Camila Torres","Pedro Ramírez","Carla Domínguez","Nicolás Castro",
    "Laura Morales","Diego Sánchez","Mariana Vega","Tomás Navarro","Gabriela Ortiz"
  ];

  const [asistencias, setAsistencias] = useState([
    [true, false, true, true, false, true, false, true, true, false, true, false, true, true, false],
    [false, true, false, true, true, false, true, false, true, true, false, true, false, true, true],
    [true, true, false, false, true, true, false, true, false, true, true, false, true, false, true],
    [false, true, true, false, true, false, true, true, false, true, false, true, true, false, true],
    [true, false, true, true, false, true, true, false, true, false, true, true, false, true, false],
    [false, true, false, true, true, false, true, true, false, true, true, false, true, true, false],
    [true, true, false, true, false, true, false, true, true, false, true, false, true, false, true],
    [false, true, true, false, true, true, false, true, false, true, false, true, true, false, true],
    [true, false, true, true, false, true, true, false, true, true, false, true, false, true, false],
    [false, true, false, true, true, false, true, false, true, false, true, true, false, true, true],
    [true, true, false, true, false, true, false, true, true, false, true, false, true, true, false],
    [false, true, true, false, true, true, false, true, false, true, false, true, true, false, true],
    [true, false, true, true, false, true, true, false, true, false, true, true, false, true, false],
    [false, true, false, true, true, false, true, false, true, true, false, true, true, false, true],
    [true, true, false, true, false, true, false, true, true, false, true, false, true, true, false]
  ]);

  // Agregar asistencia a un alumno
  const agregarAsistencia = (indexAlumno, valor) => {
    setAsistencias(prev => {
      const nuevo = [...prev];
      nuevo[indexAlumno] = [...nuevo[indexAlumno], valor];
      return nuevo;
    });
  };
    return (
        <div className="contenedor-asistencia">
            <div className="contenedor-botones">
                <button onClick={() => setMostrarFechas(true)}>Mostrar asistencias</button>
                <button onClick={() => setMostrarFechas(false)}>Ocultar asistencias</button>
                <button onClick={() => setMostrarTomar(true)}>Tomar asistencias</button>
            </div>

            <div className="contenedor-fechas">
                <div className="fecha-info">
                    <img src={calendario} alt="calendario" style={{ width: "50px" }} />
                    <h1>Asistencia</h1>
                    <h2>{fechaCustom}</h2>
                </div>

                {mostrarFechas && (
                    <>
                        <div
                            className="div-alumno"
                            style={{ backgroundColor: "white", position: "sticky", top: "0" }}
                        >
                            <CargarFecha Fechas={fechas} />
                        </div>
                        <CrearDivAlumno ListaAlumnos={alumnos} ListaAsistencias={asistencias} />
                    </>
                )}

                {mostrarTomar && (
                    <TomarAsistencia ListaAlumnos={alumnos} onMarcar={agregarAsistencia} />
                )}
            </div>
        </div>
    );

}

export default Asistencia
