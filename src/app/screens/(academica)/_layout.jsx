import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const tabsLayout = [
  {name: 'notasActuales', title:'Notas Actuales', href:'/screens/notasActuales', icon:'golf'},
  {name: 'notasAcumuladas', title:'Notas Acumuladas', href:'/screens/notasAcumuladas', icon:'receipt'},
  {name: 'promedio', title:'Promedio', href:'/screens/promedio', icon:'stats-chart'},
];

export default function AcademicaLayout({}) {

  return (
    <> 
            <Tabs screenOptions={{
              tabBarActiveTintColor: '#EC1C21', 
              tabBarInactiveTintColor: '#383838',
              tabBarStyle: {
                height: 60,
                position: 'absolute',
                bottom: 16,
                right: 16,
                left: 16,
                borderRadius: 16
              }
              }}>
                {
                  tabsLayout.map(stateTab => (
                    <Tabs.Screen key={stateTab.name}  name={stateTab.name}  options={{ title:stateTab.title, href: stateTab.href, tabBarIcon: ({size, color}) => (
                      <Ionicons name={stateTab.icon} size={size} color={color}/>
                      )}} 
                    />
                  ))
                }
            </Tabs>
    </>
  )
}
