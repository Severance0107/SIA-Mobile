import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Image, Text, TouchableHighlight, View } from "react-native";
import Bienestar from "../../../assets/img/bienestar.png";
import Calendario from "../../../assets/img/horario.png";
import Academica from "../../../assets/img/academica.png";
import Matricula from "../../../assets/img/matricula.png";
import { styles } from "../../styles/home.styles";
import useAuth from "../../hooks/useAuth";
import NoRol from "./noRol";

export default function HomeSites() {
  const { auth } = useAuth();
  const navigation = useNavigation();
  const [modulos, setModulos] = useState([]);

  useEffect(() => {
    if (auth.role[0] === "ALUMNO") {
      setModulos([
        {modulo: "Horario", image: Calendario, ruta: "/screens/estudiante", uri: "(horario)"},
        {modulo: "Información Académica", image: Academica, ruta: "/screens/notasActuales", uri: "(academica)"},
        {modulo: "Bienestar Universitario", image: Bienestar, uri: "(bienestar)"},
        {modulo: "Información Matrícula", image: Matricula, ruta: "/screens/liquidacion", uri: "(matricula)"},
      ]);
    }

    if (auth.role[0] === "PROFESOR") {
      setModulos([{modulo: "Horario", image: Calendario, ruta: "/screens/estudiante", uri: "(horario)", }]);
    }
  }, []);

  return (
    <>
      {modulos ? (
        modulos.map((moduloState, index) => (
          <TouchableHighlight
            key={index}
            onPress={() => navigation.navigate(moduloState.uri)}
            style={{ borderRadius: 5 }}
          >
            <View style={styles.homeSitesContainer}>
              <Image style={styles.homeSitesImage} source={moduloState.image} />
              <Text style={styles.homeSitesText}>{moduloState.modulo}</Text>
            </View>
          </TouchableHighlight>
        ))
      ) : (
        <NoRol />
      )}
    </>
  );
}
