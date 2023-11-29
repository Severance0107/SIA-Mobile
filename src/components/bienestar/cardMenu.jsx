import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cardMenuStyles } from "../../styles/bienestar/bienestar.styles";

export default function CardMenu({ lista }) {
  const addCar = () => {
    console.log('Producto Agregado al carrito')
  }
  return (
    <>
      {lista.map((plato, index) => (
        <View
          style={[cardMenuStyles.container, {backgroundColor: index % 2 !== 0 ? "#FFF": "#EEE"}]}
          key={index}
        >
          <View style={cardMenuStyles.header}>
            <Text style={cardMenuStyles.typeMenu}>
              {plato.TIPO_MENU}
            </Text>
            <TouchableOpacity
              onPress={() =>{addCar()}}
            >
              <View
                style={cardMenuStyles.buttonCar}
              >
                <Ionicons name="cart-outline" size={24} color="#FFF" />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={cardMenuStyles.tittle}
          >
            {plato.NOMBRE_PLATO}
          </Text>
          <View
            style={cardMenuStyles.bodyContainer}
          >
            <Text style={{color: "#383838"}}>
              Descripción:
            </Text>
            <Text>{plato.DESCRIPCION}</Text>
          </View>
        </View>
      ))}
    </>
  );
}
