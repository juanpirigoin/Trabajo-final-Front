import React, { useState } from "react";
import useUpdateAlumno from "./hooks/useUpdateAlumno"; // tu hook modificado

function UpdateAlumnoForm({ alumno }) {
  const { updateAlumno, loading, error } = useUpdateAlumno();

  // inicializa el form con los valores recibidos por prop
  const [form, setForm] = useState({
    IdAlumno: alumno?.IdAlumno || "",
    Nombre: alumno?.Nombre || "",
    Apellido: alumno?.Apellido || "",
    IdCurso: alumno?.IdCurso || "",
    DNI: alumno?.DNI || "",
    Foto: alumno?.Foto || ""
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "number" ? parseInt(value) || 0 : value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await updateAlumno(form.IdAlumno, form);

    if (result?.status === "success") {
      alert("Alumno actualizado correctamente");
    } else {
      alert("Error al actualizar: " + (result?.message || error));
    }
  };

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
      <button type="submit" disabled={loading}>
        {loading ? "Actualizando..." : "Guardar cambios"}
      </button>
      <button type="reset" onClick={() => setForm(alumno)}>Reestablecer</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default UpdateAlumnoForm;