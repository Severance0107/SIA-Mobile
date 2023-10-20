import { Stack } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

export default function NotasAcumuladas() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Notas Acumuladas',
        }}
      />
    </View>
  )
}
