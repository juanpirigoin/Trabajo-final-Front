import usePostNota from '../../hooks/notas/usePostNota';
import React, { useState } from "react";
import useGetAlumnos from "../../hooks/alumnos/useGetAlumnos";

function CreateNotaForm() {
    const [form, setForm] = useState({
        IdNota: "",
        IdAlumno: "",
        IdActividad: "",
        Nota: "",
    });
    
    const [alumnoSeleccionado, setAlumnoSeleccionado] = useState("");
    const { error, postNota } = usePostNota();
    const { error: errorAlumno, loading: loadingAlumnos, alumnos = [] } = useGetAlumnos();
    if (loadingAlumnos) return <p className="status-msg">Cargando alumnos...</p>;
    if (errorAlumno) return <p className="status-msg">Error: {errorAlumno.message}</p>;
    if (!alumnos.length) return <p className="status-msg">No hay registros</p>;

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setForm({
            ...form, [name]: type === "number" ? parseInt(value) || 0 : value,
        });
        // console.log(form);
    };

    const handleInputChangeListaAlumnos = (e) => {
        const { value } = e.target;
        setAlumnoSeleccionado(value);

        // Buscar el ID del alumno seleccionado
        const alumnoEncontrado = alumnos.find(
            (a) => `${a.Nombre} ${a.Apellido}` === value
        );

        if (alumnoEncontrado) {
            setForm((prevForm) => ({
                ...prevForm,
                IdAlumno: alumnoEncontrado.IdAlumno,
            }));
        }
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const success = await postNota(form)
        if (success) {
            setForm({
                IdNota: "",
                IdAlumno: "",
                IdActividad: "",
                Nota: "",
            })
            setAlumnoSeleccionado("");
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="IdAlumno">Alumno: </label>
            <input list="listaAlumnos"
                onChange={handleInputChangeListaAlumnos}
                value={alumnoSeleccionado}
                type="text"
                required
                name="IdAlumno"
                id="IdAlumno" />
            <datalist id="listaAlumnos">
                {alumnos.map((alumno, i) => (
                    <option
                        key={i}
                        value={`${alumno.Nombre} ${alumno.Apellido}`}
                    />
                ))}
            </datalist>

            {/* <input
                onChange={handleInputChange}
                value={form.IdAlumno}
                type="text"
                required
                name="IdAlumno"
                id="IdAlumno"
            /> */}
            <label htmlFor="IdActividad">Actividad:</label>
            <input
                onChange={handleInputChange}
                value={form.IdActividad}
                type="text"
                required
                name="IdActividad"
                id="IdActividad"
            />
            <label htmlFor="Nota">Nota: </label>
            <input
                onChange={handleInputChange}
                value={form.Nota}
                type="text"
                required
                name="Nota"
                id="Nota"
            />
            <br />
            <button type="submit"> Cargar nota </button>
            <button type="reset"> Borrar form </button>

            {error && <p>{error.message || error}</p>}
        </form>
    )
}

export default CreateNotaForm
