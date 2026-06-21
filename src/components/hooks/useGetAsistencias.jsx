import React from 'react'
import { useEffect, useState } from 'react'

function useGetAsistencias() {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [asistencias, setAsistencias] = useState([])
    // const url = "/api"  
const url = "/api?action=asistencias"; 

    const getAsistencias = async (url) => {
        try {
            setLoading(true)
            setError(null)

           const response = await fetch(url)

           if(!response.ok){
            throw new Error("Error al traer los registros de asistencia", response.status)
           }

           const data = await response.json()

           setAsistencias(data)

        } catch (error) {
            console.error(error)
            setError(error)
            setAsistencias([])
        } finally {
            setLoading(false)
        }
    }

   useEffect(() => {
        getAsistencias(url)
    }, [])

    return {asistencias, error, loading}
}

export default useGetAsistencias
