import { StyleSheet } from "react-native";
import { ColorX } from "../../../STATIC";

let styles = StyleSheet.create({
  main: {
    width: "100%",
    padding: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: ColorX.GetColorCSS("gambotBlue", 0.5),
    backgroundColor: ColorX.GetColorCSS("white", 0.25),
    marginVertical: 2,
    zIndex: 100
  },
  fitContent: {
    width: "auto"
  },
  disabled: {
    opacity: 0.5
  },
  text: {
    color: ColorX.GetColorCSS("gambotBlue"),
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12
  }
});

export default styles;