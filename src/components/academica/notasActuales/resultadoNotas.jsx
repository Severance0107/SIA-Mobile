import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {stylesResultadoNotas} from "../../../styles/academica/notasActuales.styles"

export default function ResultadoNotas({setenta}) {



  const [resultado, setResultado] = useState(0);
  const [color, setColor] = useState("#383838")

  useEffect(() => {
    calcularFaltante()
  },[]) 

  const calcularFaltante = () => {
    const operacion = ((2.96-(setenta))/0.3).toFixed(1)
    setResultado(operacion)
    if (operacion > 5){
      setColor('#EC1C21')
    }else if(operacion > 0 && operacion <= 5 ){
      setColor('#FFCC00')
    }else{
      setColor('#339900')
    }
    console.log(operacion)
  };

  return (
    <View
      style={[stylesResultadoNotas.container,{
        borderColor: color}]}
    >
      <Ionicons name="calculator-outline" size={22} color={color} />
      <Text style={[stylesResultadoNotas.text, {color: color}]}>
        {
          resultado <= 0 ? `Has aprobado en ${setenta} con el 70%` : `Necesitas ${resultado} para el Examen` 
        }
      </Text>
    </View>
  );
}
