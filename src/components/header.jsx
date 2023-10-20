import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/general.styles'

export default function Header() {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.navHeader}>
          <Text style={styles.tittle}>
              Inicio
          </Text>
          <View style={styles.notifications}>
              <Ionicons name="notifications" size={28} color="white" />
          </View>
      </View>
    </View>
  )
}
