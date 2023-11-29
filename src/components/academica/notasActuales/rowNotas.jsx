import React from "react";
import { Text, View } from "react-native";
import { stylesRowNotas } from "../../../styles/academica/notasActuales.styles";

export default function RowNotas({ primero, segundo, tercero }) {
  return (
    <View style={stylesRowNotas.container}>
      <View style={stylesRowNotas.item}>
        <Text>{primero.label}</Text>
        <Text
          style={[
            stylesRowNotas.notaLabel,
            primero.nota !== null && {
              backgroundColor: primero.nota >= 3 ? "#383838" : "#EC1C21",
            },
          ]}
        >
          {primero.nota}{" "}
        </Text>
      </View>

      <View style={stylesRowNotas.item}>
        <Text>{segundo.label}</Text>
        <Text
          style={[
            stylesRowNotas.notaLabel,
            segundo.nota !== null && {
              backgroundColor: segundo.nota >= 3 ? "#383838" : "#EC1C21",
            },
          ]}
        >
          {segundo.nota}{" "}
        </Text>
      </View>

      {(tercero.label !== "Habilitación" || tercero.nota !== null) && (
        <View style={stylesRowNotas.item}>
          <Text>{tercero.label}</Text>
          <Text
            style={[
              stylesRowNotas.notaLabel,
              tercero.nota !== null && {
                backgroundColor: tercero.nota >= 3 ? "#383838" : "#EC1C21",
              },
            ]}
          >
            {tercero.nota}{" "}
          </Text>
        </View>
      )}
    </View>
  );
}
