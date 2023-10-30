import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import perfil from '../../../assets/img/silueta.png'
import {styles} from '../../styles/home.styles'
import clienteAxios from '../../config/clienteAxios'
import useAuth from '../../hooks/useAuth'

export default function InfoPersonal() {

  const [informacion, setInformacion] = useState({})
  const {auth} = useAuth()
  const {codigo, documento} = auth

  useEffect(() => {
    fetchData()
  },[])
  
  const fetchData = async () =>{
    const {data} = await clienteAxios.get('/api/alumno/datos_home', {codigo, documento})
    setInformacion(data.datos)
  }


  return (
    <View style={styles.infoPersonalContainer}>
        <View style={styles.infoPersonalImageContainer}>
            <Image style={styles.infoPersonalImage} source={ informacion.IMAGEN === 1 ? perfil: {'uri': informacion.IMAGEN}}/>
        </View>
      <View
        style={styles.inforPersonalLineRed}
      >
        <Text style={styles.inforPersonalTextLineRed}>
          {informacion.NOMBRES}
        </Text>
      </View>
      <View
        style={styles.inforPersonalLineWhite}>
          <Text style={styles.inforPersonalTextLineWhite}>
            {informacion.CODIGO}
          </Text>
        </View>
    </View>
  )
}
