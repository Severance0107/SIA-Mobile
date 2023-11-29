import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, Switch, Text, View } from 'react-native'
import clienteAxios from '../../../config/clienteAxios';
import useAuth from '../../../hooks/useAuth';
import AccordionCarrera from '../../../components/horario/carrera/accordionCarrera';
import { semestres } from '../../../util/datos';
import {Picker} from '@react-native-picker/picker';
import { stylesCarrea } from '../../../styles/horario/horario.styles';

export default function Carrera() {

  const { datos } = useAuth()

  const codigoCarrera = datos.codigo?.slice(0, 2)

  const [ loader, setLoader ] = useState(false)
  const [ loaderPiker, setLoaderPiker ] = useState(false)
  const [ carreras, setCarreras ] = useState([])
  const [ carrera, setCarrera ] = useState(codigoCarrera || '14')
  const [ horarioCarrera, setHorarioCarrera] = useState([])
  const [ agruparPorDias, setAgruparPorDias ] = useState(false)

  useEffect(() => {
    getHorarioCarrera()
  }, [carrera])
  
  useEffect(() => {
    getCarreras()
  },[])
  
  const getCarreras = async () => {
    setLoaderPiker(true)
    try {
      const {data} = await clienteAxios.get("/api/alumno/all_carreras/");
      setCarreras(data.datos);
      setLoaderPiker(false)

    } catch (error) {
      console.log(error)
      setLoaderPiker(false)
    }  
  }


  const getHorarioCarrera = async () => {
    
    setLoader(true)
    try {
      const {data} = await clienteAxios.post("/api/alumno/horario_carrera/", {cod_car: carrera});
      setHorarioCarrera(data.datos);
      setLoader(false)
    } catch (error) {
      console.log(error)
      setLoader(false)
    }
  }

  const handleChangeAgrupar = () => {
    setAgruparPorDias(!agruparPorDias)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesCarrea.content}>
          <View>
            <Text style={{}}>Seleccione la Carrera</Text>
          </View>

          <View>
            <Switch 
              trackColor={{false: 'rgba(118, 117, 119, 0.3)', true: 'rgba(236, 43, 18, 0.3)'}}
              thumbColor={agruparPorDias ? '#EC1C21' : '#767577'}
              onValueChange={handleChangeAgrupar}
              value={agruparPorDias}
            />
          </View>
            
          <View style={stylesCarrea.pikerContainer}>
            {
              loaderPiker ?(
                <ActivityIndicator size={50} color={'#EC1C21'}/>
              ):
              <Picker
                label={"Selecciona la carrera"}
                selectedValue={carrera}
                onValueChange={(value) => setCarrera(value)}
                style={stylesCarrea.piker}
              >
                {
                  carreras.map((carrera) => (
                    <Picker.Item key={carrera.CODCAR} label={carrera.CODCAR+" - "+carrera.NOMCAR} value={carrera.CODCAR}/>
                  ))
                }
              </Picker>
            }
          </View> 
          <View>

            {
              !loader ?
                semestres.map((semestre, index) => {
                  if(horarioCarrera[semestre.numero] !== undefined){
                    return(
                      <AccordionCarrera key={semestre.texto} data={horarioCarrera[semestre.numero]} semestre={semestre.texto} color={index % 2 !== 0 ? false : true} agruparPorDias={agruparPorDias}/>
                    )
                  }else{
                    return null
                  }
                })
              : 
              <ActivityIndicator size={50} color={'#EC1C21'}/>
            }
          </View>
        </View>

        <View style={{ height: 100 }} />

      </ScrollView>
    </SafeAreaView>
  )
}
