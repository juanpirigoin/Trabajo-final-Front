import React from 'react'
import { useEffect, useState } from 'react'

function useGetUnidades() {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [unidades, setUnidades] = useState([])
    const url = `${import.meta.env.VITE_API_URL}?action=unidades`;

    const getUnidades = async () => {
        try {
            setLoading(true)
            setError(null)

            const response = await fetch(url)

            if (!response.ok) {
                throw new Error("Error al traer los registros de unidades", response.status)
            }

            const data = await response.json()

            setUnidades(data)

        } catch (error) {
            console.error(error)
            setError(error)
            setUnidades([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUnidades(url)
    }, [])

    return { unidades, error, loading }
}

export default useGetUnidades
