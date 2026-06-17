
import React, { useEffect, useState } from "react";
import notas from "../assets/notas.png";
import CajaBotones from "../components/CajaBotones";
import Encabezado from "../components/Encabezado";
import Nav from "../components/Nav";
import useObtenerRegistros from "../hooks/useObtenerRegistros";
import ListaAlumnos from "../funciones/ListaAlumnos";

function Notas() {
    const [RegistrosNotas, setRegistrosNotas] = useObtenerRegistros();
    const Alumnos = ListaAlumnos({Alumnos: RegistrosNotas});
    
    console.log(RegistrosNotas);
    
    return (
        <>
            <Nav />
            <div className="contenedor">
                <CajaBotones
                    Botones={[
                        { nombre: "Mostrar", onClick: () => { } },
                        { nombre: "Ocultar", onClick: () => { } }
                    ]}
                />
                <div className="contenedor-fechas">
                    <Encabezado srcimagen={notas} titulo={"Notas"} />
                    {Alumnos.map((alumno, index) =>
                        <div key={index} className='div-alumno'>
                            <p>{alumno}</p>
                        </div>
                    )} 

                </div>
            </div>
        </>
    )
}

export default Notas
