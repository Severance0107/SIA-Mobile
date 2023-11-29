import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import clienteAxios from "../../../config/clienteAxios";
import AccordionHorario from "../../../components/horario/estudiante/accordionHorario";
import { formatearDias } from "../../../util/tools";
import HorarioPdf from "../../../components/horario/estudiante/horarioPdf";
import Salones from "../../../components/horario/estudiante/salones";
import { dias } from "../../../util/datos";
import { stylesEstudiante } from "../../../styles/horario/horario.styles";

export default function Estudiante() {
  const [horario, setHorario] = useState([]);
  const [salones, setSalones] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    obtenerHorario();
  }, []);

  const obtenerHorario = async () => {
    setLoader(true);
    try {
      const { data } = await clienteAxios.get("/api/alumno/horario_actual");
      setHorario(data.datos.horario);
      setSalones(data.datos.salones);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesEstudiante.contentHorario}>
          {!loader ? (
            dias.map((dia, index) => (
              <AccordionHorario
                key={dia}
                data={formatearDias(dia, horario)}
                color={index % 2 !== 0 ? false : true}
              />
            ))
          ) : (
            <View style={stylesEstudiante.contentIndicator}>
              <ActivityIndicator size={50} color={"#EC1C21"} />
            </View>
          )}
        </View>

        <Salones salones={salones} loader={loader} />

        <HorarioPdf />

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
