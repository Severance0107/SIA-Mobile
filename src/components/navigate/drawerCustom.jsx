import { DrawerContentScrollView } from '@react-navigation/drawer'
import React, { useEffect, } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import useAuth from '../../hooks/useAuth'
import { Ionicons  } from '@expo/vector-icons'; 
import { styles } from '../../styles/general.styles'

export default function DrawerCustom(props) {

  const { logout } = useAuth()
  const { descriptors, state, navigation } = props;

  useEffect(()=>{
    
  },[])

  return (
    <View style={styles.drawerContainer}>

      {/* ----------------------- Header ----------------------- */}

      <View style={[styles.drawerView, {paddingHorizontal: 0}]}>
        <View style={styles.drawerInforPersonalLineRed}>
          <Text style={styles.drawerInforPersonalTextLineRed}>
            Sistema de Información
          </Text>
        </View>
        <View style={styles.drawerInforPersonalLineWhite}>
          <Text style={styles.drawerInforPersonalTextLineWhite}>
            Académica
          </Text>
          <Text style={styles.drawerHeaderSaludo}>
            Bienvenido Sergio!
          </Text>
        </View>
      </View>

      {/* ----------------------- Drawer list Item ----------------------- */}

      <DrawerContentScrollView {...props}  style={styles.drawerView}>
          {
            state.routes.map((route, index) => {
                const isFocused = state.index === index
                const { options } = descriptors[route.key]
                
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tapPress',
                        target: route.key
                    })
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                }
                
                const drawerItem = options
                const color = isFocused ? options.drawerActiveTintColor : options.drawerInactiveTintColor
                const activeItem = isFocused ? 'rgba(236, 28, 32, 0.15)' : '#FFF'
                
                return (
                    <DrawerItemCustom key={index} onPress={onPress} drawerLabel={drawerItem.drawerLabel} icon={drawerItem.icon} color={color} activeItem={activeItem} />
                )
            })
          }
       
      </DrawerContentScrollView>

      {/* ----------------------- ActionsList ----------------------- */}
      
      <View style={[styles.drawerView, {paddingVertical: 10}]}>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {}}
        >
          <Ionicons name="notifications-outline" size={24} color="#383838" />
          <Text style={[styles.drawerLabel, {color:'#383838'}]}>
            Notificaciones
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={logout}
        >
          <Ionicons name="exit-outline" size={24} color="#383838" />
          <Text style={[styles.drawerLabel, {color:'#383838'}]}>
            Salir
          </Text>
        </TouchableOpacity>

      </View>

      {/* ----------------------- SocialPages ----------------------- */}

      <View style={[styles.drawerRedesSociales, styles.drawerView]}>
          <TouchableOpacity>
              <Ionicons name="logo-facebook" size={24} color="#EC1C21" />
          </TouchableOpacity>
          <TouchableOpacity>
              <Ionicons name="logo-instagram" size={24} color="#EC1C21" />
            </TouchableOpacity>
          <TouchableOpacity>
              <Ionicons name="logo-youtube" size={24} color="#EC1C21" />
          </TouchableOpacity>
          <TouchableOpacity>
              <Ionicons name="globe-outline" size={24} color="#EC1C21" />
          </TouchableOpacity>
      </View>

    </View>
  )
}

const Icon = ({icon, color}) => {
  return (
    <Ionicons name={icon} size={24} color={color} />
  )
}

const DrawerItemCustom = ({drawerLabel, onPress, icon, color, activeItem }) => {
    return (
        <TouchableOpacity style={[styles.drawerItem , {backgroundColor: activeItem}]} onPress={onPress} accessibilityRole='button'>
            <Icon icon={icon} color={color} />
            <Text style={[styles.drawerLabel, {color}]}>
                {drawerLabel}
            </Text>
        </TouchableOpacity>
    )
}

