import { StyleSheet } from "react-native";

export const stylesNotasActuales = StyleSheet.create({
  window: {
    flexGrow: 1,
  },
  container: {
    margin: 20,
  },
  tittleContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    marginBottom: 15,
  },
  tittle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "#EC1C21",
  },
  content: {
    flexGrow: 1,
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
    shadowRadius: 5,
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
  },
  subTittle: {
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
  subContent: {
    marginHorizontal: 10,
    marginBottom: 10,
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
  contentAcordion: {
    paddingBottom: 10,
  },
});

export const stylesRowNotas = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
  },
  notaLabel: {
    marginTop: 5,
    color: "#FFF",
    borderRadius: 15,
    paddingHorizontal: 6,
    paddingVertical: 3,
    fontWeight: "600",
  },
});

export const stylesResultadoNotas = {
  container: {
    marginTop: 10,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginHorizontal: 30,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  text: {
    fontWeight: "500",
  },
};

export const stylesContenidoAcordion = StyleSheet.create({
  container: { 
    marginHorizontal: 20,
    marginVertical: 5, 
    gap: 5 
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#EC1C21",
    paddingHorizontal: 10,
    paddingBottom: 3,
  },
  itemEnd: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 3,
  },
});
