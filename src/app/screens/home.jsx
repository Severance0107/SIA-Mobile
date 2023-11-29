import React from 'react'
import { View } from 'react-native'
import { Stack } from 'expo-router'
import HomeSites from '../../components/home/homeSites'
import InfoPersonal from '../../components/home/infoPersonal'
import {styles} from '../../styles/home.styles'

export default function Home() {

  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Inicio',
        }}
      />
      <InfoPersonal />

      <View style={styles.homeContainerHomeSites}>
        <HomeSites/>
      </View>
      
    </View>
  )
}
