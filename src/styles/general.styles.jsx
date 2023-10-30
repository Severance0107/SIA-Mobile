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
        padding:5,
        zIndex: -1
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
    },

    // Loader
    loaderContainer: {
        paddingTop: Constants.statusBarHeight,
        flexGrow: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    loaderImage:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 314,
        height: 236,
        resizeMode: 'stretch'
    },

    // TabButtons
    containerTabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabButton:{
        width:40,
        height: 40,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: '#FFF',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBorderButton:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#EC1C21',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabLabel:{
        fontSize: 9, color: '#EC1C21', textAlign: 'center'
    },


    drawerStyles:{
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'transparent'
    }
})