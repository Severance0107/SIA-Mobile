import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import clienteAxios from "../../../config/clienteAxios";
import AccordionNotasActuales from "../../../components/academica/notasActuales/accordionNotasActuales";
import { stylesNotasActuales } from "../../../styles/academica/notasActuales.styles";

export default function NotasActuales() {
  const [fechaVigente, setFechaVigente] = useState({});
  const [materias, setMaterias] = useState([]);

  const ordinal = {
    1: "Primer",
    2: "Segundo",
    3: "Inactivo"
  };

  useEffect(() => {
    getFechaVigente();
    getNotasActuales();
    /fecha_vigente/;
  }, []);

  const getNotasActuales = async () => {
    try {
      const { data } = await clienteAxios.get("/api/alumno/notas_actuales/");
      setMaterias(data.datos);
    } catch (error) {
      console.log(error);
    }
  };

  const getFechaVigente = async () => {
    try {
      const { data } = await clienteAxios.get("/api/alumno/fecha_vigente/");
      setFechaVigente(data.datos);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={stylesNotasActuales.window}
      >
        <ScrollView>
          <View style={stylesNotasActuales.container}>
            <View
              style={stylesNotasActuales.tittleContainer}
            >
              <Text
                style={stylesNotasActuales.tittle}
              >
                {ordinal[fechaVigente.SEMESTRE]} semestre del {fechaVigente.ANO}
              </Text>
            </View>
            <View
              style={stylesNotasActuales.content}
            >
              {materias.map((materia, index) => (
                <AccordionNotasActuales
                  key={materia.CODIGO}
                  data={materia}
                  color={index % 2 === 0 ? true : false}
                />
              ))}
            </View>
            <View style={{ height: 100 }} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
