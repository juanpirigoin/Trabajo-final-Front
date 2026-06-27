import usePostNota from '../hooks/notas/usePostNota';
import React, { useState } from "react";

function CreateNotaForm() {
    const [form, setForm] = useState({
        IdNota: "",
        IdAlumno: "",
        IdActividad: "",
        Nota: "",
    });

    const { error, postNota } = usePostNota();

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setForm({
            ...form, [name]: type === "number" ? parseInt(value) || 0 : value,
        });
        // console.log(form);
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
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="IdAlumno">Alumno: </label>
            <input
                onChange={handleInputChange}
                value={form.IdAlumno}
                type="text"
                required
                name="IdAlumno"
                id="IdAlumno"
            />
            <br />
            <label htmlFor="IdActividad">Actividad:</label>
            <input
                onChange={handleInputChange}
                value={form.IdActividad}
                type="text"
                required
                name="IdActividad"
                id="IdActividad"
            />
            <br />
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
