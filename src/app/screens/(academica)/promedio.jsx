import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import clienteAxios from '../../../config/clienteAxios'

export default function Promedio() {

  const [ promedio, setPromedio ] = useState({})

  useEffect(() => {
    getPromedio()
  }, [])

  const getPromedio = async () => {
    try {
      const {data} = await clienteAxios.get('/api/alumno/promedio/')
      console.log(data)
      setPromedio(data)
    } catch (error) {
      
    }
  }

  return (
    <Text>Desde Promedio</Text>
  )
}
