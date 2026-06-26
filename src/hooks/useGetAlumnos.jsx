import React from 'react'
import { useEffect, useState } from 'react'

function useGetAlumnos() {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [alumnos, setAlumnos] = useState([])
    // const url = "/api"  
    const url = `${import.meta.env.VITE_API_URL}?action=alumnos`; 

    const getAlumnos = async () => {
        try {
            setLoading(true)
            setError(null)

           const response = await fetch(url)

           if(!response.ok){
            throw new Error("Error al traer los registros de alumnos", response.status)
           }

           const data = await response.json()

           setAlumnos(data)

        } catch (error) {
            console.error(error)
            setError(error)
            setAlumnos([])
        } finally {
            setLoading(false)
        }
    }

   useEffect(() => {
        getAlumnos(url)
    }, [])

    return {alumnos, error, loading}
}

export default useGetAlumnos
