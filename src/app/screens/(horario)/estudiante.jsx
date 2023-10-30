import { Link, Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Estudiante() {
  const insets = useSafeAreaInsets()
  return (
    <>
      <Stack.Screen
      options={{
        title: 'Horario Estudiante',
        
      }}
      />
      
      <View >
        <Text>
          Horario Estudiante
        </Text>
        <Link href={'/screens/home'}>Volver</Link>
      </View>
    </>
  )
}
