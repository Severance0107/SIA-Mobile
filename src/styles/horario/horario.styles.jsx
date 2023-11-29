import { StyleSheet } from "react-native";

export const stylesEstudiante = StyleSheet.create({
  contentHorario: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  contentIndicator: {
    backgroundColor: "#FFF",
    padding: 30,
    borderRadius: 5,
  },
});

export const stylesSalones = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#EC1C21",
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
  },
  containerTextHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  contentContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textHeader: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "500",
  },
  contentTextLeft: {
    color: "#EC1C21",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 12,
  },
  contentTextRight: {
    color: "#383838",
    textTransform: "capitalize",
    fontSize: 12,
  },
});

export const stylesButtonPdf = StyleSheet.create({
    button:{
        gap: 10,
        flexDirection:'row', 
        backgroundColor: '#EC1C21',
        marginVertical: 20,
        marginHorizontal: 70,
        paddingVertical: 10,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    text:{
      color: '#FFF',
          fontSize: 16,
          fontWeight: '500'
    }
})

export const stylesCarrea = StyleSheet.create({
  content: {
    margin: 20,
  },
  pikerContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 10,
    padding: 6,
  },
  piker: {
    color: "#383838",
  },
});

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
