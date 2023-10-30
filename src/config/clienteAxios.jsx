import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const clienteAxios = axios.create({

    baseURL: `${process.env.EXPO_PUBLIC_SERVER}`
  
})
clienteAxios.interceptors.request.use(async function(config) {
    const jsonValue = await AsyncStorage.getItem('token');
    const session = jsonValue === null ? {token: null} : JSON.parse(jsonValue)
    config.headers.Authorization = `Bearer ${session.token}`
    return config
})


// clienteAxios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     if(response.status >= 200 && response.status < 300 ) { {type: 'success'} }
//     // console.log(response.status)
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return (error);
// });

// instance.interceptors.response.use(
//     response => {
//         if (response.status === 201) { toast(response.data.data,{type: 'success'});} 
//         let datos = {} ;
//         Object.keys(response.data).map(res=>{if(res !== 'success'){datos[decrypt(res)] = decrypt(response.data[res]);}});
//         store.dispatch(off());
//         return datos;
//     },
//     error => {
//         store.dispatch(off());
//         console.log(error);
//         if (error.response.status === 401 || error.response.status === 403) {
//             window.location.href = "https://127.0.0.1:8000/salir";
//         }
//         let msg = ( typeof error.response.data.data === 'undefined') ?  error.response.data.message : error.response.data.data;
//         toast(msg,{type: 'error'}); 
//         return error.response.data;
//     }
// );


export default clienteAxios;