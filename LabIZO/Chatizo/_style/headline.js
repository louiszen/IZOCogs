import { StyleSheet } from "react-native";
import { ColorX } from "../../../STATIC";

let styles = StyleSheet.create({
  main: {
    position: "relative",
    height: 50,
    width: "100%",
    borderRadius: 0,
    padding: 0,
    backgroundColor: ColorX.GetColorCSS("gambotBlue")
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15
  },
  text: {
    alignItems: "center",
    position: "relative",
    padding: 0,
    fontWeight: "bold",
    color: "white"
  },
  settings: {
    width: 50,
    height: 50,
    color: "white"
  }
});

export default styles;