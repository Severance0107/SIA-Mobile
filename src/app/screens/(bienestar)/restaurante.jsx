import React, { useEffect, useState } from "react";
import clienteAxios from "../../../config/clienteAxios";
import { View } from "react-native-animatable";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { fechaDiaria } from "../../../util/tools";
import { Ionicons } from "@expo/vector-icons";
import CardMenu from "../../../components/bienestar/cardMenu";
import { restauranteStyles } from "../../../styles/bienestar/bienestar.styles";

export default function Restaurante() {
  const [menu, setMenu] = useState([]);
  const [lista, setLista] = useState([]);
  const [servicio, setServicio] = useState(0);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    filtrarServicio(servicio);
  }, [servicio]);

  const getMenu = async () => {
    setLoader(true);
    try {
      const { data } = await clienteAxios.get("/api/alumno/menu_restaurante/");
      setMenu(data.datos);
      setServicio(2);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  const filtrarServicio = (servicio) => {
    const fechaActual = fechaDiaria();
    const platos = menu.filter((plato) => {
      return plato.SERVICIO == servicio && plato.FECHA == fechaActual;
    });
    setLista(platos);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={restauranteStyles.container}
      >
        <TouchableOpacity
          style={[restauranteStyles.button, {backgroundColor: servicio === 1 ? "#EC1C21" : "#FFF"}]}
          onPress={() => {
            setServicio(1);
          }}
        >
          <Ionicons
            name="partly-sunny-outline"
            size={20}
            color={servicio === 1 ? "#FFF" : "#EC1C21"}
          />
          <Text style={[restauranteStyles.textButton,{color: servicio === 1 ? "#FFF" : "#EC1C21"}]}>
            Desayuno
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[restauranteStyles.button, {backgroundColor: servicio === 2 ? "#EC1C21" : "#FFF"}]}
          onPress={() => {
            setServicio(2);
          }}
        >
          <Ionicons
            name="sunny-outline"
            size={20}
            color={servicio === 2 ? "#FFF" : "#EC1C21"}
          />
          <Text style={[restauranteStyles.textButton,{color: servicio === 2 ? "#FFF" : "#EC1C21"}]}>
            Almuerzo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[restauranteStyles.button, {backgroundColor: servicio === 3 ? "#EC1C21" : "#FFF"}]}
          onPress={() => {
            setServicio(3);
          }}
        >
          <Ionicons
            name="moon-outline"
            size={20}
            color={servicio === 3 ? "#FFF" : "#EC1C21"}
          />
          <Text style={[restauranteStyles.textButton,{color: servicio === 3 ? "#FFF" : "#EC1C21"}]}>
            Cena
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={restauranteStyles.content}>
          {loader ? (
            <View style={restauranteStyles.contentFixed}>
              <ActivityIndicator size="large" color="#EC1C21" />
            </View>
          ) : lista.length > 0 ? (
            <CardMenu lista={lista} />
          ) : (
            <View style={restauranteStyles.contentFixed} >
              <Text style={{textAlign:'center'}}>No se ha registrado aún ningun menú</Text>
            </View>
          )}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}


