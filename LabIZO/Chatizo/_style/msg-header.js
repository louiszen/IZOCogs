import { StyleSheet } from "react-native";
import { ColorX } from "../../../STATIC";

let styles = StyleSheet.create({
  main: {
    padding: 0,
    width: "auto"
  },
  text: {
    color: ColorX.GetColorCSS("gambotBlue"),
    fontWeight: "bold",
    fontSize: 12
  }
});

export default styles;