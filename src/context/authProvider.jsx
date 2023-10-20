import { useState, useEffect, createContext } from "react";
// import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({
        id: '',
        nombre: '',
        correo: ''
    })
    const [session, setSession] = useState(false);
    const [cargando, setCargando] = useState(false)

    // TODO: Validar Inicio de Sesión

    // useEffect(() => {
    //     // const autenticarUsuario = async () => {
    //     //     const token = localStorage.getItem('token')
    //     //     if(!token){
    //     //         setCargando(false)
    //     //         return
    //     //     }

    //     //     const config = {
    //     //         headers: {
    //     //             "Content-Type": "application/json",
    //     //             Authorization: `Bearer ${token}`
    //     //         }
    //     //     }

    //     //     try {
    //     //         // const { data } = await clienteAxios('/usuarios/perfil', config)
    //     //         // setAuth(data)
    //     //         // navigante('/proyectos')
    //     //     } catch (error) {
    //     //         setAuth({})     
    //     //     }
    //     //     setCargando(false)
    //     // }
    //     // autenticarUsuario()
    // },[])

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