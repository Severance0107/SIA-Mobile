import { StyleSheet } from "react-native";
import Constants  from "expo-constants";

export const styles = StyleSheet.create({
    containerFluid:{
        flexGrow: 1,
        paddingTop: Constants.statusBarHeight
        
    },
    contentHeaderImage:{
        position: 'absolute',
        backgroundColor: '#FFF',
        margin: 7,
        zIndex: 99,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    headerImage: {
        width: 190,
        height: 45,
        margin: 10,
        resizeMode: 'stretch'
    },
    navHeaderAuth: {
        
        backgroundColor: '#EC1C21',
        width: 'auto',
        height: 55,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    bodyContainer:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyPaper:{
        borderWidth: 0.5,
        borderColor: '#dadada',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    contentPaper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },
    textSis: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#EC1C21',
        color: '#FFF',
        fontSize: 21,
        fontWeight: '700',
        paddingHorizontal: 30,
        paddingVertical: 5
    },
    textAca: {
        color: '#EC1C21',
        fontSize: 21,
        fontWeight: '700',
        marginBottom: 15
    },
    textInicio: {
        backgroundColor: 'rgba(241, 241, 241, 0.5)',
        paddingHorizontal: 40,
        color: '#383838',
        fontSize: 18,
        fontWeight: '600',
        borderRadius: 5,
        marginBottom: 25
    },
    comboInput:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d6d6d6',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10
    },
    icon:{
        paddingLeft: 3
    },
    input: {
        width: 130,
        marginLeft: 3
    },
    button:{
        marginVertical: 15
    },
    buttonDesing:{
        flexDirection: 'row', 
        justifyContent:'center', 
        alignItems: 'center', 
        backgroundColor: '#EC1C21',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 8, 
        width:125
    },
    buttonText:{
        color:'#FFF', 
        marginLeft:5, 
        fontWeight:'700', 
        fontSize:15,
        textTransform: 'uppercase'
    },
    containerFooter:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor:'#383838',
        padding:10
    },
    footerTextDes: {
        color: '#FFF',
        fontSize: 12,
    },
    footerTextDiv: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '700'
    },
})