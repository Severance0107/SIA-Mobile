import React from 'react'
import { Text, View } from 'react-native'
import { stylesContenidoAcordion } from '../../../styles/academica/notasActuales.styles'

export default function ContenidoAcordion({materia}) {
  return (
    <View style={stylesContenidoAcordion.container}>
        <View
          style={stylesContenidoAcordion.item}
        >
          <Text>Código Materia</Text>
          <Text>{materia.COD_MAT}</Text>
        </View>
        <View
          style={stylesContenidoAcordion.item}
        >
          <Text>Creditos</Text>
          <Text>{materia.CREDITOS}</Text>
        </View>
        <View
          style={stylesContenidoAcordion.item}
        >
          <Text>Definitiva</Text>
          <Text>{materia.DEFINITIVA}</Text>
        </View>
        {materia.HABILITACION !== null && (
          <View
            style={stylesContenidoAcordion.item}
          >
            <Text>Habilitación</Text>
            <Text>{materia.HABILITACION}</Text>
          </View>
        )}
        <View
          style={stylesContenidoAcordion.itemEnd}
        >
          <Text>Horas Teorico Practicas</Text>
          <Text>{materia.HORAS}</Text>
        </View>
      </View>
  )
}
