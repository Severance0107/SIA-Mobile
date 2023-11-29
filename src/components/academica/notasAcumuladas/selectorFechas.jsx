import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SelectorFechas({
  fechas,
  posicion,
  setPosicion,
  cantidad,
}) {
  const siguiente = () => {
    if (posicion < cantidad) {
      setPosicion(posicion + 1);
    }
  };

  const anterior = () => {
    if (posicion > 0) {
      setPosicion(posicion - 1);
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "#EC1C21", fontSize: 20, fontWeight: "600" }}>
          Año y Semestre
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#EC1C21",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
          onPress={() => anterior()}
        >
          <View>
            <Ionicons name="chevron-back" size={24} color="#FFF" />
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
          }}
        >
          {fechas[posicion]}
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#EC1C21",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
          onPress={() => siguiente()}
        >
          <View>
            <Ionicons name="chevron-forward" size={24} color="#FFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
