import { useState, useEffect, createContext } from "react";
import { dataForm } from "../util/prueba";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
// import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [session, setSession] = useState(false);
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const autenticarUsuario = async () => {

            const jsonValue = await AsyncStorage.getItem('token')
            if(jsonValue){
                const session = jsonValue === null ? {token: null} : JSON.parse(jsonValue)
                setAuth(session)
                setSession(true)
                setCargando(false)
                router.replace('/screens/home')
                return
            }
            setCargando(false)
        }
        autenticarUsuario()
    },[])

    const logout = async () => {
        AsyncStorage.removeItem('token')
        setSession(false)
        setAuth({})
        router.replace('/auth')
    }

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                session,
                setSession,
                logout
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