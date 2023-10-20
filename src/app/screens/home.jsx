import React from 'react'
import { Text, View } from 'react-native'
import { Link, Stack } from 'expo-router'

export default function Home() {

  
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Inicio',
        }}
      />
      <Text>Desde el home</Text>
      <Link href={'screens/notasActuales'}>Ir a academica</Link>
      <Link href={'screens/restaurante'}>Ir a Bienestar</Link>
      <Link href={'screens/estudiante'}>Ir a horario</Link>
      <Link href={'screens/liquidacion'}>Ir a Matricula</Link>
    </View>
  )
}
