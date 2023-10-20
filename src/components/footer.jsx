import React from 'react'
import { Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/general.styles'
import footerImage from '../../public/img/logoufps2.png'

export default function Footer() {
  return (
    <View style={styles.containerFooter}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
              <View style={{alignItems:'center'}}>
                <Ionicons name="phone-portrait-outline" size={25} color="white" />
                <Text style={styles.textVersion} >V. 3.0</Text>
              </View>
                <View style={{marginLeft:2}}>
                    <Text style={styles.textDes} >Desarollador por:</Text>
                    <Text style={styles.textDiv} >Division de Sistemas</Text>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
              <Image style={styles.imageFooter} source={footerImage}/>
            </View>
    </View>
  )
}