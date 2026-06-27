import { useState } from "react";

function useUpdateAlumno() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateAlumno = async (idAlumno, alumnoActualizado) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST", // 👈 usamos POST para simular PATCH
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "patchAlumno", // 👈 Apps Script lo reconoce como actualización
          id: idAlumno,
          ...alumnoActualizado
        })
      });

      // Si la respuesta no es JSON válido, lanzamos error
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (err) {
      setError(err.message);
      return { status: "error", message: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { updateAlumno, loading, error };
}

export default useUpdateAlumno;
