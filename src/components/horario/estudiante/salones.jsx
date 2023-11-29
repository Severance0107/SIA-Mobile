import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { stylesSalones } from "../../../styles/horario/horario.styles";

export default function Salones({ salones, loader }) {
  return (
    <View style={stylesSalones.container}>
      <View style={stylesSalones.headerContainer}>
        <View>
          <Text style={stylesSalones.textHeader}>
            Salón
          </Text>
        </View>
        <View style={stylesSalones.containerTextHeader}>
          <Text style={stylesSalones.textHeader}>Ubicación</Text>
        </View>
      </View>
      { loader ? 
          <View style={{padding:30, backgroundColor:'#FFF'}}>
            <ActivityIndicator size={50} color={'#EC1C21'}/>
          </View>
        :(
          
          salones.map((salon, index, array) => (
            <View key={index} style={[stylesSalones.content,{
              backgroundColor: index % 2 === 0 ? "#FFF" : "#EEE",
              borderBottomRightRadius: index === array.length - 1 ? 5 : 0,
              borderBottomLeftRadius: index === array.length - 1 ? 5 : 0
            }]}>
              
              <View style={[stylesSalones.contentContainer, {width: 40, height: 20}]}>

              <Text style={stylesSalones.contentTextLeft}>{salon.SALON}</Text>
              </View>

              <View style={[stylesSalones.contentContainer,{flex: 2}]}>
                <Text style={stylesSalones.contentTextRight}>{salon.DESCRIPCION}</Text>
              </View>
            </View>
          ))
        )
        
      }
    </View>
  );
}
