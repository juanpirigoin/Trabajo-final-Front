import { useState, useEffect } from "react";

function usePostNota() {
  const [error, setError] = useState(null)
    
    const postNota = async (formData) => {
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
                body: JSON.stringify({ action: "notas", ...formData })
            })

            if(!response.ok){
                throw new Error(`Error al cargar la nota, ${response.status}`)
            }
            const data = await response.json()
            console.log({data})
            // Data posee los datos de respuesta de la API
            return data
        } catch (error) {
            console.error("Error al cargar la nota", error)
            setError(error)
            return null
        }
    }
    return {error, postNota}
}

export default usePostNota