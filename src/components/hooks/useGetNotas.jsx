import React from 'react'
import { useEffect, useState } from 'react'

function useGetNotas() {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [notas, setNotas] = useState([])
    // const url = "/api"  
    const url = "/api?action=notas"; 

    const getNotas = async () => {
        try {
            setLoading(true)
            setError(null)

           const response = await fetch(url)

           if(!response.ok){
            throw new Error("Error al traer los registros de notas", response.status)
           }

           const data = await response.json()

           setNotas(data)

        } catch (error) {
            console.error(error)
            setError(error)
            setNotas([])
        } finally {
            setLoading(false)
        }
    }

   useEffect(() => {
        getNotas(url)
    }, [])

    return {notas, error, loading}
}

export default useGetNotas
