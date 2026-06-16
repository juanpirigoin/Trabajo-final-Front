import React from 'react'

function CambiarFormatoFecha({ fechaYMD }) {
    const [year, month, day] = fechaYMD.split("-");
    const formato = `${day}/${month}`;
    return <span>{formato}</span>;
}

export function GuardarAsistencia({ ListaAlumnos, Asistencias }) {

    return (
        <div></div>

    )
}

export function TomarAsistencia({ ListaAlumnos, onMarcar }) {
    return (
        <>
            {ListaAlumnos.map((alumno, index) =>
                <div key={index} className='div-alumno'>
                    <p style={{ display: "block", marginLeft: "10px", width: "100px", fontWeight: "bold" }}>{alumno}</p>
                    <div style={{ display: "flex", alignContent: "center", alignSelf: "center", gap: "20px" }}>
                        <button onClick={() => onMarcar(index, true)}
                            style={{ backgroundColor: "rgb(28, 255, 0)", padding: "8px", border: "none", borderRadius: "5px" }}>
                            <i className="fa-solid fa-check" style={{ color: "rgb(255,255,255)" }}></i></button>
                        <button onClick={() => onMarcar(index, false)}
                            style={{ backgroundColor: "rgb(255, 0, 0)", padding: "8px", border: "none", borderRadius: "5px" }}>
                            <i className="fa-solid fa-x" style={{ color: "rgb(255,255,255)" }}></i></button>

                    </div>
                </div>
            )}
        </>
    )
}

export function CargarFecha({ Fechas }) {
    return (
        <>
            <p style={{ display: "block", marginLeft: "10px", width: "100px", fontWeight: "bold" }}
            >Fechas:</p>
            <ul>
                {Fechas.map((fecha, index) => (
                    <li key={index} style={{ display: "inline-block", textAlign: "center", width: "40px" }}>
                        <CambiarFormatoFecha fechaYMD={fecha} /></li>
                ))}
            </ul>
        </>
    )
}
function CargarAsistenciaAlumno({ Alumno, Asistencias }) {
    return (
        <>
            <p style={{ display: "block", marginLeft: "10px", width: "100px", fontWeight: "bold" }}>{Alumno}</p>
            <ul>
                {Asistencias.map((presente, index) =>
                    (presente === true ? <li key={index} 
                        style={{ display: "inline-block", textAlign: "center", width: "40px" }}>
                            <i className="fa-solid fa-check" style={{ color: "rgb(28, 255, 0)" }}></i>
                            </li> : <li key={index} style={{ display: "inline-block", textAlign: "center", width: "40px" }}>
                                <i className="fa-solid fa-x" style={{ color: "rgb(255, 0, 0)" }}></i></li>)
                )}
            </ul>
        </>
    )
}

export function CrearDivAlumno({ ListaAlumnos, ListaAsistencias }) {
    return (
        <>
            {ListaAlumnos.map((alumno, index) =>
                <div key={index} className='div-alumno'>
                    <CargarAsistenciaAlumno
                        Alumno={ListaAlumnos[index]}
                        // Asistencias={[true,false,false,true]}
                        Asistencias={ListaAsistencias[index]}
                    />
                </div>
            )}


        </>
    )
}

export default CargarFecha
