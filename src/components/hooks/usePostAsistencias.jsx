import { useState, useEffect } from "react";

function usePostAsistencias() {
  const [error, setError] = useState(null)

    const postAsistencia = async (formData) => {
        setError(null)

        try {
            const response = await fetch("/api", {
                // Define el metodo http
                method: "POST",
                // Define el tipo de informacion que viaja, en este caso es texto
                headers: {
                    "Content-type": "application/json"
                },
                // Body es donde viaja la informacion
                body: JSON.stringify(formData)
            })

            if(!response.ok){
                throw new Error(`Error al crear el producto, ${response.status}`)
            }

            const data = await response.json()
            console.log({data})
            // Data posee los datos de respuesta de la API
            return data
        } catch (error) {
            console.error("Error al crear un nuevo producto", error)
            setError(error)
            return null
        }
    }
    return {error, postAsistencia}
}

export default usePostAsistencias