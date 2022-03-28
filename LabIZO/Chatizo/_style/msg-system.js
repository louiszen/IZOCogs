import { StyleSheet } from "react-native";
import { ColorX } from "../../../STATIC";

let styles = StyleSheet.create({
  main: {
    margin: 5,
    paddingVertical: 3,
    paddingHorizontal: 15,
    backgroundColor: ColorX.GetColorCSS("lightGrey", 0.2),
    textAlign: "center",
    borderRadius: 5
  },
  text: {
    fontSize: 12
  }
});

export default styles;