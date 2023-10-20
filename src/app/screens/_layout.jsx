import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { Text, View } from 'react-native'
import { Redirect, Stack } from 'expo-router'
import Footer from '../../components/footer'
import { Ionicons  } from '@expo/vector-icons'; 



export default function ScreensLayout() {

  const { session, cargando } = useAuth()

  useEffect(()=> {
    // router.push('/screens/home')
  },[])
  
  if (cargando) {
    return <Text>Cargando...</Text>
  }

  if(!session) {
    return <Redirect href="/" />
  }

  return (
    <>
      <Stack 
        screenOptions={{
          headerStyle:{
            backgroundColor:'#EC1C21',
          },
          headerTintColor: '#FFF',
          headerTitleStyle:{
            fontWeight: '700',
            fontSize: 25,
          },
          headerTitleAlign: 'center',
          headerRight: () => (<Notificaciones />)
        }}
      >
        <Stack.Screen name={"(academica)"} options={{headerShown: false}}/>
        <Stack.Screen name={"(bienestar)"} options={{headerShown: false}}/>
        <Stack.Screen name={"(horario)"} options={{headerShown: false}}/>
        <Stack.Screen name={"(matricula)"} options={{headerShown: false}}/>
      </Stack>
      <Footer/>
    </>
  )
}

const Notificaciones = () => {
  return (
    <View>
      <Ionicons name="notifications" size={24} color="#FFF" />
    </View>
  )
}
