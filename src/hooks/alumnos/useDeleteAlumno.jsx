import { useState, useEffect } from "react";

function useDeleteAlumno() {
  const [error, setError] = useState(null)
    
    const deleteAlumno = async (idAlumno) => {
        setError(null)

        try {
            const response = await fetch(import.meta.env.VITE_API_URL, {
                // Define el metodo http
                method: "POST",
                // Define el tipo de informacion que viaja, en este caso es texto
                headers: {
                    "Content-type": "application/json"
                },
                // Body es donde viaja la informacion
                body: JSON.stringify({
          action: "deleteAlumno", // 👈 Apps Script lo reconoce como actualización
          id: idAlumno
        })
            })

            if(!response.ok){
                throw new Error(`Error al eliminar el alumno, ${response.status}`)
            }

            const data = await response.json()
            console.log({data})
            // Data posee los datos de respuesta de la API
            return data
        } catch (error) {
            console.error("Error al eliminar el alumno", error)
            setError(error)
            return null
        }
    }
    return {error, deleteAlumno}
}

export default useDeleteAlumno