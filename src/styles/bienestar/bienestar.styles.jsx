import { StyleSheet } from "react-native";

export const restauranteStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    width: 90,
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: "#EC1C21",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textButton: {
    fontWeight: "500",
  },
  content: {
    marginHorizontal: 20,
    marginBottom: 20,
    flexGrow: 1,
    gap: 10,
  },
  contentFixed: {
    height: 140,
    justifyContent: "center",

    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
});

export const cardMenuStyles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  typeMenu: {
    color: "#EC1C21",
    fontWeight: "700",
    fontSize: 24,
  },
  buttonCar: {
    backgroundColor: "#EC1C21",
    borderRadius: 50,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    elevation: 5,
  },
  tittle: {
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
  bodyContainer: {
    marginTop: 5,
    gap: 2,
  },
});
