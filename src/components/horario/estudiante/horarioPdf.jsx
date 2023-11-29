import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import clienteAxios from "../../../config/clienteAxios";
import { stylesButtonPdf } from "../../../styles/horario/horario.styles";

export default function HorarioPdf() {

  const [ pdf, setPdf] = useState("")

  // TODO: Pendiente la descarga de archivos

  const getHorarioPdf = async () => {
    try {

      const {data} = await clienteAxios.get('/api/alumno/horario_actual_pdf/')
      setPdf(data.datos)

      // const { uri } = await Print.printToFileAsync({ data: data.datos });
      // console.log('File has been saved to:', uri);
      // await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
      





      
      console.log('descargando')
      // const url = `${process.env.EXPO_PUBLIC_SERVER}/api/alumno/horario_actual_pdf/`
      // const localPath = FileSystem.documentDirectory + 'horarioActual.pdf'
      // console.log(FileSystem.downloadAsync(url, localPath))
      // .then(({uri}) => Linking.openURL(uri))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TouchableOpacity 
      style={stylesButtonPdf.button}
      onPress={() => {
        getHorarioPdf()
      }}
    >
      <AntDesign name="pdffile1" size={24} color="#FFF" />
      <Text
        style={stylesButtonPdf.text}
      >Descargar</Text>
    </TouchableOpacity>
  );
}
