import React from "react";

function ProbarPatch() {
  const handlePatch = async () => {
    try {
      const res = await fetch("/api", {
        method: "POST", // 👈 usamos POST para simular PATCH
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "patchAlumno",
          id: 3,
          Nombre: "Pedro Actualizado"
        })
      });

      const data = await res.json();
      console.log("Respuesta del servidor:", data);
      alert("Respuesta: " + JSON.stringify(data));
    } catch (err) {
      console.error("Error en PATCH:", err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Prueba PATCH Alumno (simulado con POST)</h3>
      <button onClick={handlePatch}>Actualizar Alumno</button>
    </div>
  );
}

export default ProbarPatch;