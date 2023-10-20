import { StyleSheet } from "react-native";
import Constants  from "expo-constants";

export const styles = StyleSheet.create({
    // Header
    containerHeader:{
        paddingTop: Constants.statusBarHeight
    },
    navHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#EC1C21',
        alignItems: 'center',
    },
    tittle: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: '500',
        marginHorizontal:15,
        marginVertical:10
    },
    notifications:{
        marginHorizontal:15
    },

    // Footer
    containerFooter:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor:'#383838',
        padding:5
    },
    imageFooter: {
        width: 175,
        height: 45,
        margin: 5,
        resizeMode: 'stretch'
    },
    textDes:{
        color:'#fff',
        fontSize:13
    },
    textDiv:{
        color:'#fff',
        fontSize:14,
        fontWeight: '700'
    },
    textVersion:{
        color:'#fff',
        fontSize:8
    }
})