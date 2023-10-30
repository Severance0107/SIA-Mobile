import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    // Informacion Personal
    infoPersonalContainer:{
        margin: 20,
        borderRadius: 10,
        shadowColor: "#000",
        backgroundColor:'#FFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative'
    },
    infoPersonalImageContainer:{
        position: 'absolute', 
        left: 10, 
        top:12.5, 
        zIndex: 1,
        alignItems: 'center', 
        backgroundColor:'#FFF',
        borderRadius: 50
    },
    infoPersonalImage:{
        width:65, 
        height:65, 
        resizeMode: 'stretch', 
        borderRadius: 50
    },
    inforPersonalLineRed:{
        height:45,
        backgroundColor: 'red',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 70,
        alignItems: 'center',
        justifyContent:'center'
    },
    inforPersonalTextLineRed:{
        fontSize:16, 
        color: '#fff',
        textAlignVertical: "center", 
        fontWeight: '700'
    },
    inforPersonalLineWhite:{
        height:45,
        backgroundColor: '#FFF',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        paddingHorizontal: 70,
        alignItems: 'center',
        justifyContent:'center'
    },
    inforPersonalTextLineWhite:{
        fontSize:15, 
        color: '#000',
        textAlignVertical: "center", 
        fontWeight: '700'
    },
    
    // Home
    homeContainerHomeSites:{
        flexDirection: 'row', 
        flexWrap:'wrap',
        gap: 25,
        padding: 20,
        justifyContent:'center',
        alignItems: 'center'
    },

    homeSitesContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius:5,

        shadowColor: "#000",
        backgroundColor:'#FFF',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:150,
        height: 180
    },
    homeSitesImage:{
        height:80, 
        width:80, 
        resizeMode:'stretch'
    },
    homeSitesText:{
        marginTop: 10,
        textAlign: 'center',
        fontSize:  14,
        fontWeight: '500'
    },

})