import { StyleSheet } from "react-native";
import { ColorX } from "../../../STATIC";

let styles = StyleSheet.create({
  main: {
    marginTop: 2,
    marginHorizontal: 1,
    width: "auto",
    maxWidth: "70%"
  },
  in: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: ColorX.GetColorCSS("lightGrey")
  },
  out: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: ColorX.GetColorCSS("gambotBlue")
  },
  textIn: {
    color: ColorX.GetColorCSS("gambotText"),
  },
  textOut: {
    color: ColorX.GetColorCSS("pureWhite")
  }
});

export default styles;