import React, { useState } from "react";
import useUpdateAlumno from "../hooks/useUpdateAlumno";

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
      onClose();
    } else {
      alert("Error al actualizar: " + (result?.message || error));
    }
  };

  return (
    <div className="modificar-form-wrapper">
      <h3>Editar Alumno</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input name="Nombre" value={form.Nombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Apellido</label>
          <input name="Apellido" value={form.Apellido} onChange={handleChange} required />
        </div>
        <div>
          <label>Curso</label>
          <input name="IdCurso" value={form.IdCurso} onChange={handleChange} required />
        </div>
        <div>
          <label>DNI</label>
          <input name="DNI" value={form.DNI} onChange={handleChange} required />
        </div>
        <div>
          <label>Foto (URL)</label>
          <input name="Foto" value={form.Foto} onChange={handleChange} />
        </div>
        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? "Actualizando..." : "Guardar cambios"}
          </button>
          <button type="button" onClick={onClose} className="btn-danger" style={{padding: "11px 20px", borderRadius: "var(--radius-sm)", border: "none", cursor: "pointer"}}>Cancelar</button>
        </div>
        {error && <p style={{ color: "var(--color-danger)", fontSize: "0.9rem" }}>{error}</p>}
      </form>
    </div>
  );
}

export default ModificarAlumno;
