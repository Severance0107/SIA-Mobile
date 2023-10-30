import { DrawerContentScrollView } from '@react-navigation/drawer'
import React, { useEffect, } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import useAuth from '../../hooks/useAuth'
import { Ionicons  } from '@expo/vector-icons'; 

export default function DrawerCustom(props) {

  const { logout } = useAuth()
  const { descriptors, state, navigation } = props;

  useEffect(()=>{
    
  },[])

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{
        backgroundColor: '#FFF',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}>
        <View style={styles.inforPersonalLineRed}>
          <Text style={styles.inforPersonalTextLineRed}>
            Sistema de Información
          </Text>
        </View>
        <View style={styles.inforPersonalLineWhite}>
          <Text style={styles.inforPersonalTextLineWhite}>
            Académica
          </Text>
          <Text style={styles.drawerHeaderSaludo}>
            Bienvenido Sergio!
          </Text>
        </View>
      </View>

      {/* Drawer list Item*/}
      <DrawerContentScrollView {...props}  style={styles.view}>
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
                    <DrawerItem2 key={index} onPress={onPress} drawerLabel={drawerItem.drawerLabel} icon={drawerItem.icon} color={color} activeItem={activeItem} />
                )
            })
          }
       
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={{
        backgroundColor: '#FFF',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
      }}>
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
        <View style={[styles.drawerRedesSociales, {backgroundColor: '#FFF',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginBottom: 10}]}>
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

const DrawerItem2 = ({drawerLabel, onPress, icon, color, activeItem }) => {
    return (
        <TouchableOpacity style={[styles.drawerItem , {backgroundColor: activeItem}]} onPress={onPress} accessibilityRole='button'>
            <Icon icon={icon} color={color} />
            <Text style={[styles.drawerLabel, {color}]}>
                {drawerLabel}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    gap: 10
  },
  view:{
    backgroundColor: '#FFF',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 5,
  },
  item:{
    padding: 0,
    margin: 0
  },
  infoPersonalContainer:{
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    backgroundColor:'#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative'
  },
  infoPersonalImageContainer:{
      position: 'absolute', 
      right: 110,
      top:12.5, 
      zIndex: 1,
      backgroundColor:'#FFF',
      borderRadius: 50
  },
  infoPersonalImage:{
      width:65, 
      height:65, 
      resizeMode: 'stretch', 
      borderRadius: 50
  },
  inforPersonalLineRed:{
      display: 'flex',
      flexGrow: 1,
      height:40,
      backgroundColor: 'red',
      borderTopLeftRadius: 10,
      alignItems: 'center',
      justifyContent:'center'
  },
  inforPersonalTextLineRed:{
      fontSize:15, 
      color: '#FFF',
      textAlignVertical: "center", 
      textAlign: 'center',
      fontWeight: '700',
      textTransform: 'uppercase',
      textShadowColor: 'rgba(255, 255, 255, 0.5)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 3
  },
  inforPersonalLineWhite:{
      height:60,
      backgroundColor: '#FFF',
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10,
      paddingHorizontal: 70,
      alignItems: 'center',
      justifyContent:'center'
  },
  inforPersonalTextLineWhite:{
      fontSize:18, 
      color: '#383838',
      textAlignVertical: "center", 
      fontWeight: '700',
      textAlign: 'center',
      textTransform: 'uppercase',
      textShadowColor: 'rgba(56, 56, 56, 0.4)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 3
  },
  drawerHeaderSaludo:{
    color: '#000',
    fontSize: 15,
    fontWeight:'400',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 3
  },
  drawerItem:{
    flexDirection:'row',
    alignItems: 'center',
    padding: 15,
    borderRadius:8
  },
  drawerLabel:{
    fontSize:15,
    paddingLeft: 10
  },
  drawerRedesSociales:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly'
  }
})
