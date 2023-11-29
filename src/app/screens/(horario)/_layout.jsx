import React, { useRef, useEffect } from 'react'
import { Tabs} from 'expo-router'
import TabsCustom from '../../../components/tabsCustom';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../../../styles/general.styles';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity, View } from 'react-native';

const tabsLayout = [
  {name: 'estudiante', title:'Horario Actual', label:'Actual', href:'/screens/estudiante', icon:'calendar-check'},
  {name: 'carrera', title:'Horario Carrera', label:'Carrera', href:'/screens/carrera', icon:'newspaper'},
];

export default function HorarioLayout({}) {

  return ( 
    <TabsCustom>
      {
        tabsLayout.map(stateTab => (
          <Tabs.Screen 
            key={stateTab.name}  
            name={stateTab.name}  
            options={{ 
              title: stateTab.title,
              tabBarButton: (props) => <TabButton  {...props} stateTab={stateTab}  />
            }} 
          />
        ))
      }
    </TabsCustom>
)
}

export const TabButton = (props) => {
  const {stateTab, onPress, accessibilityState} = props
  const focused = accessibilityState.selected;

  const viewRef = useRef(null)
  const circleRef = useRef(null)
  const LabelRef = useRef(null)

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, translateY: 8 },
        0.93: { translateY: -18 },
        1: { scale: 1.5, translateY: -10 },
      });
      circleRef.current.animate({
        0: { scale: 0 },
        0.1: { scale: 0.9 },
        0.5: { scale: 0.1 },
        0.8: { scale: 0.7 },
        1: { scale: 1 },
      });
      LabelRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, translateY: -10 },
        1: { scale: 1.2, translateY: 6 },
      });
      circleRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
      LabelRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return(
    <TouchableOpacity 
      style={styles.containerTabButton}
      onPress={onPress}
      optacity={1}
    >
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.containerTabButton}
      >
        <View style={styles.tabButton}>
          <Animatable.View
            ref={circleRef}
            style={styles.tabBorderButton}
          />
          <FontAwesome5 name={stateTab.icon} color={focused ? '#FFF' : '#EC1C21'} size={20}/>
        </View>
        <Animatable.Text ref={LabelRef} style={styles.tabLabel}>
          {
            stateTab.label
          }
        </Animatable.Text>

      </Animatable.View>
    </TouchableOpacity>
  )
}
