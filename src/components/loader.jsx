import React from 'react'
import { Image, View } from 'react-native'
import { styles } from '../styles/general.styles'
import logo from '../../assets/img/logo_vertical.png'

export default function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <Image style={styles.loaderImage} source={logo} />
    </View>
  )
}
