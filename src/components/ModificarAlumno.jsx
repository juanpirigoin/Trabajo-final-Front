import React, { useState } from "react";
import useUpdateAlumno from "./hooks/useUpdateAlumno";

function ModificarAlumno({ alumno, onClose }) {
  const { updateAlumno, loading, error } = useUpdateAlumno();

  const [form, setForm] = useState({
    IdAlumno: alumno?.IdAlumno || "",
    Nombre: alumno?.Nombre || "",
    Apellido: alumno?.Apellido || "",
    IdCurso: alumno?.IdCurso || "",
    DNI: alumno?.DNI || "",
    Foto: alumno?.Foto || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateAlumno(form.IdAlumno, form);

    if (result?.status === "success") {
      alert("Alumno actualizado correctamente");
      onClose(); // cerrar el formulario después de actualizar
    } else {
      alert("Error al actualizar: " + (result?.message || error));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem", border: "1px solid #ccc" }}>
      <h3>Editar Alumno</h3>

      <label>Nombre:</label>
      <input name="Nombre" value={form.Nombre} onChange={handleChange} />
      <br />

      <label>Apellido:</label>
      <input name="Apellido" value={form.Apellido} onChange={handleChange} />
      <br />

      <label>Curso:</label>
      <input name="IdCurso" value={form.IdCurso} onChange={handleChange} />
      <br />

      <label>DNI:</label>
      <input name="DNI" value={form.DNI} onChange={handleChange} />
      <br />

      <label>Foto:</label>
      <input name="Foto" value={form.Foto} onChange={handleChange} />
      <br />

      <button type="submit" disabled={loading}>
        {loading ? "Actualizando..." : "Guardar cambios"}
      </button>
      <button type="button" onClick={onClose}>Cancelar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default ModificarAlumno;
