import React from 'react'

import { Stack, Tabs} from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const tabsLayout = [
  {name: 'restaurante', title:'Restaurante', href:'/screens/restaurante', icon:'fast-food'},
  {name: 'reservaEscenario', title:'Escenarios Deportivos', href:'/screens/reservaEscenario', icon:'football'},
];

export default function BienestarLayout({}) {

  return (
    <>
        <Tabs screenOptions={{headerShown:true, tabBarActiveTintColor: '#EC1C21', tabBarInactiveTintColor: '#383838'}}>
            <Tabs.Screen   name='restaurante'  options={{ title:'Restaurante', href: '/screens/restaurante', tabBarIcon: ({size, color}) => (
                <Ionicons name="fast-food" size={size} color={color}/>
                )}} />
            <Tabs.Screen name='reservaEscenario' options={{ title:'Escenarios', href: '/screens/reservaEscenario', tabBarIcon: ({size, color}) => (
                <Ionicons name="football" size={size} color={color}/>
                )}} />
        </Tabs>
    </>
  )
}
