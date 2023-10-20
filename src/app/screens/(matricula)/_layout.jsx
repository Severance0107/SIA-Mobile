import React from 'react'

import { Stack, Tabs} from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const tabsLayout = [
  {name: 'liquidacion', title:'Liquidación', href:'/screens/liquidacion', icon:'cash'},
  {name: 'matriculaActual', title:'Matricula Actual', href:'/screens/matriculaActual', icon:'albums'},
];

export default function MatriculaLayout({}) {

  return (
    <>
            <Tabs screenOptions={{headerShown:true, tabBarActiveTintColor: '#EC1C21', tabBarInactiveTintColor: '#383838'}}>
                  <Tabs.Screen   name='liquidacion'  options={{ title:'Liquidacion', href: '/screens/liquidacion', tabBarIcon: ({size, color}) => (
                      <Ionicons name="cash" size={size} color={color}/>
                      )}} 
                  />
                  <Tabs.Screen name='matriculaActual' options={{ title:'Acumuladas', href: '/screens/matriculaActual', tabBarIcon: ({size, color}) => (
                      <Ionicons name="albums" size={size} color={color}/>
                      )}} 
                  />
            </Tabs>
    </>
  )
}
