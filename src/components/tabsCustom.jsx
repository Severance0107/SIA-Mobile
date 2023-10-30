import { Link, Tabs, router, useNavigation,  } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native';

export default function TabsCustom({children}) {
  return (
    <Tabs 
    screenOptions={{
        headerStyle:{
          backgroundColor:'#EC1C21',
        },
        headerTintColor: '#FFF',
        headerTitleStyle:{
          fontWeight: '500',
          fontSize: 25
        },
        headerTitleAlign: 'center',
        headerLeft: () => (<Salir />),
        headerRight: () => (<Menu />),
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

const Menu = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
    style={{marginRight: 8, borderRadius: 50}}
    onPress={() => {navigation.openDrawer()}}
    >
      <Ionicons name="menu" size={25} color="#FFF" />
    </TouchableHighlight>
  )
}

const Salir = () => {
  return (
    <Link
      href={'/screens/home'}
      style={{marginLeft: 8, borderRadius: 50}}
    >
      <Ionicons name="chevron-back-outline" size={25} color="#FFF" />
    </Link>
  )
}