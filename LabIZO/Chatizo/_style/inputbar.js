import { StyleSheet } from "react-native";
import { ColorX } from "../../../STATIC";

let styles = StyleSheet.create({
  main: {
    width: "100%",
    padding: 5
  },
  bar: {
    borderColor: ColorX.GetColorCSS("gambotBlue", 0.1),
    borderWidth: 1,
    borderRadius: 25
  },
  text: {
    flex: 1
  }
});

export default styles;