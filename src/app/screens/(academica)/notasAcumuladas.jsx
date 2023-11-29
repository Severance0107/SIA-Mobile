import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import clienteAxios from "../../../config/clienteAxios";
import SelectorFechas from "../../../components/academica/notasAcumuladas/selectorFechas";
import Accordion from "../../../components/accordion";
import { ScrollView } from "react-native-gesture-handler";
import ContenidoAcordion from "../../../components/academica/notasAcumuladas/contenidoAcordion";

export default function NotasAcumuladas() {
  const [notasAcumuladas, setNotasAcumuladas] = useState({});
  const [fechas, setFechas] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [posicion, setPosicion] = useState(0);

  useEffect(() => {
    getNotasAcumuladas();
  }, []);

  const getNotasAcumuladas = async () => {
    try {
      const { data } = await clienteAxios.get("/api/alumno/notas_acumuladas/");
      setNotasAcumuladas(data.datos);
      const fechasData = await extraerFechas(data.datos);
      setFechas(fechasData);
      setCantidad(fechasData.length - 1);
    } catch (error) {
      console.log(error);
    }
  };

  const extraerFechas = (fechasData) => {
    const arrayFechas = [];

    for (let key in fechasData) {
      if (fechasData.hasOwnProperty(key)) {
        arrayFechas.push(key);
      }
    }
    return arrayFechas;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ margin: 20, flexGrow: 1 }}>
          <SelectorFechas
            fechas={fechas}
            posicion={posicion}
            setPosicion={setPosicion}
            cantidad={cantidad}
          />
          {
            // console.log(fechas.length)
            fechas.length > 0
              ? notasAcumuladas[fechas[posicion]].map((materia, index) => (
                  <Accordion key={index} title={materia.COD_MAT} color={index % 2 === 0 ? true : false}>
                    <ContenidoAcordion materia={materia} />
                  </Accordion>
                ))
              : console.log("No tiene historico de notas")
          }
        </View>
        <View style={{ height: 100 }} />

      </ScrollView>
    </SafeAreaView>
  );
}
