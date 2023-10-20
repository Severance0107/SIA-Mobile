import { useState } from 'react'
import { Image, Text, View, TextInput, Button, Touchable, TouchableNativeFeedback } from 'react-native'
import ImageHeader from '../../public/img/logoufps.png'
import { styles } from '../styles/auth.styles'
import { Ionicons  } from '@expo/vector-icons'; 
import useAuth from '../hooks/useAuth';
import { Redirect, router } from 'expo-router';

export default function Auth() {

    const [codigo, setCodigo] = useState('')
    const [documento, setDocumento] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(true)

    const {session, setSession} = useAuth()

    const handleChangeHidePassword = () => {
        setHidePassword(!hidePassword);
    }
        
    const handleSubmit = async persona => {
        console.log(persona)
        setSession(true)

        console.log(session)

        if(session){
           return router.replace('/screens/home')
        }
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
                        <Button 
                            title="Ingresar"
                            onPress={() => {handleSubmit({codigo, documento, password})}}
                            color={'#EC1C21'}
                            />
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
