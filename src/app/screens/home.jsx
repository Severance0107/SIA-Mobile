import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button, View } from 'react-native'
import { Stack, router } from 'expo-router'
import useAuth from '../../hooks/useAuth'
import HomeSites from '../../components/home/homeSites'
import InfoPersonal from '../../components/home/infoPersonal'
import {styles} from '../../styles/home.styles'
import Footer from '../../components/footer'

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
