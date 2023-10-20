import { Link, Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function NotasActuales() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Notas Actuales',
        }}
      />
      <Text>
        Desde Notas actuales
      </Text>
      <Link href={'/screens/home'}>Volver</Link>
    </View>
  )
}
