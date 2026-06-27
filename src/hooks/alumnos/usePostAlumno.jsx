import { useState, useEffect } from "react";

function usePostAlumno() {
  const [error, setError] = useState(null)
    
    const postAlumno = async (formData) => {
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
                body: JSON.stringify({ action: "alumnos", ...formData })
            })

            if(!response.ok){
                throw new Error(`Error al cargar el alumno, ${response.status}`)
            }

            const data = await response.json()
            console.log({data})
            // Data posee los datos de respuesta de la API
            return data
        } catch (error) {
            console.error("Error al cargar el alumno", error)
            setError(error)
            return null
        }
    }
    return {error, postAlumno}
}

export default usePostAlumno