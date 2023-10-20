import React from 'react'

import { Stack, Tabs} from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const tabsLayout = [
  {name: 'estudiante', title:'Horario Actual', href:'/screens/estudiante', icon:'person'},
  {name: 'carrera', title:'Horario Carrera', href:'/screens/carrera', icon:'newspaper'},
];

export default function HorarioLayout({}) {

  return (
    <>
            <Tabs screenOptions={{headerShown:true, tabBarActiveTintColor: '#EC1C21', tabBarInactiveTintColor: '#383838'}}>
                <Tabs.Screen name='estudiante'  options={{ title:'Horario Actual', href: '/screens/estudiante', tabBarIcon: ({size, color}) => (
                    <Ionicons name="person" size={size} color={color}/>
                    )}} />
                <Tabs.Screen name='carrera' options={{ title:'Horario Carrera', href: '/screens/carrera', tabBarIcon: ({size, color}) => (
                    <Ionicons name="newspaper" size={size} color={color}/>
                    )}} />
            </Tabs>
    </>
  )
}
