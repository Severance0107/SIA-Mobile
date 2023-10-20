import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const clienteAxios = axios.create({

    baseURL: `${process.env.EXPO_PUBLIC_SERVER}`
  
})
clienteAxios.interceptors.request.use(async function(config) {
    const jsonValue = await AsyncStorage.getItem('token');
    const session = jsonValue === null ? {token: null} : JSON.parse(jsonValue)
    console.log(session)
    config.headers.Authorization = `Bearer ${session.token}`
    return config
})

export default clienteAxios;