import React from 'react'
import { useEffect, useState } from 'react'

function useGetActividades() {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [actividades, setActividades] = useState([])
    const url = `${import.meta.env.VITE_API_URL}?action=actividades`;

    const getActividades = async () => {
        try {
            setLoading(true)
            setError(null)

            const response = await fetch(url)

            if (!response.ok) {
                throw new Error("Error al traer los registros de actividades", response.status)
            }

            const data = await response.json()

            setActividades(data)

        } catch (error) {
            console.error(error)
            setError(error)
            setActividades([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getActividades(url)
    }, [])

    return { actividades, error, loading }
}

export default useGetActividades
