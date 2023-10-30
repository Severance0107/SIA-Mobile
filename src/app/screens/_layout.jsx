import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Text, TouchableHighlight } from 'react-native'
import { Redirect, useNavigation } from 'expo-router'
import { Ionicons  } from '@expo/vector-icons'; 
import drawer, { Drawer } from 'expo-router/drawer'
import DrawerCustom from '../../components/navigate/drawerCustom'
import { styles } from '../../styles/general.styles'


export default function ScreensLayout() {
  
  const { session, cargando, auth } = useAuth()
  const [modulos, setModulos] = useState([])

  useEffect(()=> {
    if(auth.role[0] === 'ALUMNO'){  
      setModulos([
        {name:'home', headerShown: true, drawerLabel:'Inicio', icon:'home-outline'},
        {name:'(bienestar)', headerShown: false, drawerLabel:'Bienestar Univeritario', icon:'fitness-outline'},
        {name:'(academica)', headerShown: false, drawerLabel:'Información Académica', icon:'library-outline'},
        {name:'(horario)', headerShown: false, drawerLabel:'Horario', icon:'calendar-outline'},
        {name:'(matricula)', headerShown: false, drawerLabel:'Matricula ', icon:'receipt-outline'},
      ])
    }
    if(auth.role[0] === 'PROFESOR'){  
      setModulos([
        {name:'home', headerShown: true, drawerLabel:'Inicio'},
      ])
    }
  }, [])

  if (cargando) {
    return <Text>Cargando...</Text>
  }

  if(!session) {
    return <Redirect href="/" />
  }

  return (
    <>
      <Drawer
        drawerContent={(props) => <DrawerCustom {...props}/>}
        screenOptions={{
          headerStyle:{
            backgroundColor:'#EC1C21',
          },
          headerTintColor: '#FFF',
          headerTitleStyle:{
            fontWeight: '500',
            fontSize: 25,
          },
          headerTitleAlign: 'center',
          headerRight: () => (<Menu/>),
          headerLeft: () => (<Notificaciones/>),
          drawerStyle: styles.drawerStyles,
          drawerPosition: 'right',
          drawerActiveTintColor: '#EC1C21',
          drawerInactiveTintColor: '#383838',
        }}
      >
        {
          modulos.map((modulo, index) => (
            <Drawer.Screen key={index} name={modulo.name} options={{headerShown: modulo.headerShown, drawerLabel: modulo.drawerLabel, icon: modulo.icon}} />
          ))
        }
      </Drawer>
    </>
  )
}

const Notificaciones = () => {
  return (
    <TouchableHighlight
      style={{marginLeft: 8}}
      
    >
      <Ionicons name="ios-notifications-outline" size={25} color="#FFF" />
    </TouchableHighlight>
  )
}

const Menu = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
    style={{marginRight: 8}}
    onPress={() => {navigation.openDrawer()}}
    >
      <Ionicons name="menu" size={25} color="#FFF" />
    </TouchableHighlight>
  )
}
