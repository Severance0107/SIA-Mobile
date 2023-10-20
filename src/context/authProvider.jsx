import { useState, useEffect, createContext } from "react";
import { dataForm } from "../util/prueba";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
// import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [session, setSession] = useState(false);
    const [cargando, setCargando] = useState(false)

    // TODO: Validar Inicio de Sesión

    useEffect(() => {
        const autenticarUsuario = async () => {

            const jsonValue = await AsyncStorage.getItem('token')
            if(jsonValue){
                const session = jsonValue === null ? {token: null} : JSON.parse(jsonValue)
                console.log(session)
                setAuth(session)
                console.log("antes")
                setSession(true)
                setCargando(false)
                console.log("hola")
                router.replace('/screens/home')
                console.log("hola2")
                return
            }
            setCargando(false)
        }
        autenticarUsuario()
    },[])

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                session,
                setSession
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;