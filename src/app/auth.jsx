import { useState } from 'react'
import clienteAxios from '../config/clienteAxios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Image, Text, View, TextInput, TouchableNativeFeedback, TouchableHighlight, ActivityIndicator, Alert } from 'react-native'
import ImageHeader from '../../assets/img/logoufps.png'
import { styles } from '../styles/auth.styles'
import useAuth from '../hooks/useAuth';
import { Ionicons  } from '@expo/vector-icons'; 
import Loader from '../components/loader';

export default function Auth() {

    const [codigo, setCodigo] = useState('')
    const [documento, setDocumento] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(true)
    const [loader, setLoader] = useState(false)

    const {cargando, session, setSession, setAuth, logout} = useAuth()

    const handleChangeHidePassword = () => {
        setHidePassword(!hidePassword);
    }

    const alerta = () =>
    Alert.alert('Error de Autenticación', 'Revisa tus credenciales y vuelve a intentarlo', [
      {text: 'Volver a Intentar'},
    ]);
        
    const handleSubmit = async e => {
            
        if([codigo, documento, password].includes('')){
            console.log('Todos los campo son obligatorios')
            return
        }

        try {
            setLoader(true)
            const {data} = await clienteAxios.post('/login', {cod:codigo, doc:documento, pas:password, not:'3f8dba94-c830-4131-968b-09d1b6cade06'})
            
            if(data.success){
                const jsonValue = JSON.stringify(data);
                await AsyncStorage.setItem('token', jsonValue)
                setSession(true)
                setAuth({...data})
                setCodigo('')
                setDocumento('')
                setPassword('')
                router.replace('/screens/home')
            }else{
                alerta()
            }
            
        } catch (error) {
            console.log(error)
            alerta()
        } finally {
            setLoader(false)
        }

        if(session){
           return router.replace('/screens/home')
        }
    }

    if(cargando) {
        return <Loader />
    }

  return (
    <View style={styles.containerFluid}>
        {/* Header */}
        <View >
            <View style={styles.contentHeaderImage}>
                <Image 
                    source={ImageHeader}
                    style={styles.headerImage} 
                />
            </View>
            <View style={styles.navHeaderAuth}/>
        </View>

        {/* Body */}
        <View style={styles.bodyContainer}>
            <View style={styles.bodyPaper}>
                <View style={styles.contentPaper}>

                
                    <Text style={styles.textSis} >
                        Sistema de Información
                    </Text>
                    <Text style={styles.textAca}>Académico</Text>
                    <Text style={styles.textInicio}>Inicio de Sesión</Text>
                    <View style={styles.comboInput}>
                        <View style={styles.icon}>
                            <Ionicons name="md-barcode" size={24} color="grey" />
                        </View>
                        <TextInput 
                            style={styles.input}
                            onChangeText={text => setCodigo(text)}
                            value={codigo}
                            placeholder="Código"
                            keyboardType='number-pad'
                        />
                    </View>
                    <View style={styles.comboInput} >
                        <View style={styles.icon}>
                            <Ionicons name="card" size={24} color="grey" />
                        </View>
                        <TextInput 
                            style={styles.input}
                            onChangeText={text => setDocumento(text)}
                            value={documento}
                            placeholder="Documento"
                            keyboardType='default'
                        />
                    </View>
                    <View style={styles.comboInput} >
                        <View style={styles.icon}>
                            <Ionicons name="ios-key" size={24} color="grey" />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: 130}}>
                            <TextInput  
                                style={{width:110}}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                placeholder="Contraseña"
                                secureTextEntry={hidePassword}
                            />
                            { password.length > 0 && (<TouchableNativeFeedback
                                onPress={() => {handleChangeHidePassword()}}
                            >
                                <View>
                                    <Ionicons name={hidePassword ? "eye" : "eye-off"} size={16} color="grey" />
                                </View>
                            </TouchableNativeFeedback>)}
                        </View>
                    </View>
                    <View style={styles.button}>
                        {loader ? (
                            <View style={styles.buttonDesing}>
                                <ActivityIndicator size={25} color={'#FFF'}/>
                            </View>
                        ):(<TouchableHighlight onPress={handleSubmit} style={{borderRadius:5}}>
                            <View style={styles.buttonDesing}>
                                <Ionicons name="enter-outline" size={25} color="#FFF" />
                                <Text style={styles.buttonText}> Ingresar </Text>
                            </View>
                        </TouchableHighlight> )}

                    </View>
                </View>
            </View>
        </View>

        {/* Footer */}
        <View style={styles.containerFooter}>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name="phone-portrait-outline" size={35} color="white" />
                <View>
                    <Text style={styles.footerTextDes} >Desarollador por:</Text>
                    <Text style={styles.footerTextDiv} >Division de Sistemas</Text>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={styles.footerTextDes}>Versión</Text>
                <Text style={styles.footerTextDiv}>3.0</Text>
            </View>
        </View>
    </View>
  )
}
