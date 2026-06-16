import { useState, useEffect } from "react";

export default function useObtenerRegistros() {
  const [Registros, setRegistros] = useState([]);
  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxd1vNE_EQ8VbBud_xlBZn4InrPvUG3CROH4x8QtjLhgo4g0HGJKLhqRQDkA7iG1MOx/exec")
      .then(res => res.json())
      .then(json => setRegistros(json))
      .catch(err => console.error("Error al traer datos:", err));
  }, []);
    return [Registros, setRegistros]
}
