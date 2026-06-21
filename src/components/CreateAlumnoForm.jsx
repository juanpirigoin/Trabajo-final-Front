import usePostAlumno from './hooks/usePostAlumno';
import React, { useState } from "react";

function CreateAlumnoForm() {

    const [form, setForm] = useState({
        IdAlumno: "",
        Nombre: "",
        Apellido: "",
        IdCurso: "",
        DNI: "",
        Foto: ""
    });

    const { error, postAlumno } = usePostAlumno();

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setForm({
            ...form, [name]: type === "number" ? parseInt(value) || 0 : value,
        });
        console.log(form);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const success = await postAlumno(form)
        if (success) {
            setForm({
                IdAlumno: "",
                Nombre: "",
                Apellido: "",
                IdCurso: "",
                DNI: "",
                Foto: ""
            })
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="Nombre">Nombre: </label>
            <input
                onChange={handleInputChange}
                value={form.Nombre}
                type="text"
                required
                name="Nombre"
                id="Nombre"
            />
            <br />
            <label htmlFor="Apellido">Apellido:</label>
            <input
                onChange={handleInputChange}
                value={form.Apellido}
                type="text"
                required
                name="Apellido"
                id="Apellido"
            />
            <br />
            <label htmlFor="IdCurso">IdCurso: </label>
            <input
                onChange={handleInputChange}
                value={form.IdCurso}
                type="text"
                required
                name="IdCurso"
                id="IdCurso"
            />
            <br />
            <label htmlFor="DNI">DNI: </label>
            <input
                onChange={handleInputChange}
                value={form.DNI}
                type="text"
                required
                name="DNI"
                id="DNI"
            />
            <br />
            <label htmlFor="Foto">Foto: </label>
            <input
                onChange={handleInputChange}
                value={form.Foto}
                type="text"
                required
                name="Foto"
                id="Foto"
            />
            <br />
            <button type="submit"> Crear Alumno </button>
            <button type="reset"> Borrar form </button>

            {error && <p>{error.message || error}</p>}
        </form>
    )
}

export default CreateAlumnoForm
