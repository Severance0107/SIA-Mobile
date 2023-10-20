import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { Text } from 'react-native'
import { Redirect, Slot, Stack, router } from 'expo-router'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Home from './home'



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
    {/* <Header /> */}
      <Stack >
        <Stack.Screen name={"(academica)"} options={{headerShown: false}}/>
        <Stack.Screen name={"(bienestar)"} options={{headerShown: false}}/>
        <Stack.Screen name={"(horario)"} options={{headerShown: false}}/>
        <Stack.Screen name={"(matricula)"} options={{headerShown: false}}/>
      </Stack>
    <Footer/>
    </>
  )
}
