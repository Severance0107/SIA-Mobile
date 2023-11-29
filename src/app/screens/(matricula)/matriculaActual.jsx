import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import clienteAxios from '../../../config/clienteAxios'

export default function MatriculaActual() {
  const [ matricula, setMatricula ] = useState({})

  useEffect(() => {
    getMatricula()
  }, [])

  const getMatricula = async () => {
    try {
      const { data } = await clienteAxios.get('/api/alumno/matricula/')
      setMatricula(data.datos)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Link href={'/screens/home'}>Volver</Link>
  )
}
