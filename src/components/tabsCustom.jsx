import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native-web';

export default function TabsCustom({children, tabItems}) {
  return (
    <Tabs 
    screenOptions={{
        headerStyle:{
          backgroundColor:'#EC1C21',
        },
        headerTintColor: '#FFF',
        headerTitleStyle:{
          fontWeight: '700',
          fontSize: 25
        },
        headerTitleAlign: 'center',
        headerLeft: () => (<Back/>),
        headerRight: () => () => (<Stack />),
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
                children
            }
        </Tabs>
  )
}

const Back = () => {
  return (
    <View>
      <Ionicons name="chevron-back" size={24} color="#FFF" />
    </View>
  )
}

const Stack = () => {
  return (
    <View>
      <Ionicons name="list" size={24} color="#FFF" />
    </View>
  )
}