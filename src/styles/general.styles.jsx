import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({

  // --------------------- Header ---------------------

  containerHeader: {
    paddingTop: Constants.statusBarHeight,
  },
  navHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#EC1C21",
    alignItems: "center",
  },
  tittle: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "500",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  notifications: {
    marginHorizontal: 15,
  },

  // --------------------- Footer ---------------------

  containerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#383838",
    padding: 5,
    zIndex: -1,
  },
  imageFooter: {
    width: 175,
    height: 45,
    margin: 5,
    resizeMode: "stretch",
  },
  textDes: {
    color: "#fff",
    fontSize: 13,
  },
  textDiv: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  textVersion: {
    color: "#fff",
    fontSize: 8,
  },

  // --------------------- Loader ---------------------

  loaderContainer: {
    paddingTop: Constants.statusBarHeight,
    flexGrow: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  loaderImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 314,
    height: 236,
    resizeMode: "stretch",
  },

  // --------------------- TabButtons ---------------------

  containerTabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#FFF",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  tabBorderButton: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#EC1C21",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  tabLabel: {
    fontSize: 9,
    color: "#EC1C21",
    textAlign: "center",
  },

  // --------------------- Drawer ---------------------
  
  drawerStyles: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "transparent",
  },
  drawerContainer: {
    flex: 1,
    gap: 10,
  },
  drawerView: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 5,
  },
  drawerInfoPersonalContainer: {
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    backgroundColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "relative",
  },
  drawerInforPersonalLineRed: {
    display: "flex",
    flexGrow: 1,
    height: 40,
    backgroundColor: "red",
    borderTopLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  drawerInforPersonalTextLineRed: {
    fontSize: 15,
    color: "#FFF",
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "700",
    textTransform: "uppercase",
    textShadowColor: "rgba(255, 255, 255, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  drawerInforPersonalLineWhite: {
    height: 60,
    backgroundColor: "#FFF",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    paddingHorizontal: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  drawerInforPersonalTextLineWhite: {
    fontSize: 18,
    color: "#383838",
    textAlignVertical: "center",
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    textShadowColor: "rgba(56, 56, 56, 0.4)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  drawerHeaderSaludo: {
    color: "#000",
    fontSize: 15,
    fontWeight: "400",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
  },
  drawerLabel:{
    fontSize:15,
    paddingLeft: 10
  },
  drawerRedesSociales:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    marginBottom: 10
  }
});

// ------------------------ Accordion -----------------------------------
export const stylesAcordion = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  tittleContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    color: "#383838",
    textTransform: "capitalize",
  },
  subTittle:{
    fontSize: 14,
    fontWeight: "500",
    color: "#383838",
  },
  chevronImage: {
    width: 16,
    height: 16,
  },
  contentContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  content: {
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  subContent:{
    marginHorizontal: 10,
    marginBottom: 10
  },
  contentTop: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textContentTop: {
    fontSize: 12,
    textAlign: "center",
    color: "#EC1C21",
    textAlign: "center",
  },
  contentBottom: {
    flex: 1,
    gap: 5,
    alignItems: "flex-end",
  },
  textContentBottom: {
    fontSize: 12,
    color: "#383838",
    textAlign: "center",
    fontWeight: "400",
  },
});
