import { StyleSheet } from "react-native";
import { ColorX } from "../../../STATIC";

let styles = StyleSheet.create({
  main: {
    marginTop: 2,
    marginHorizontal: 1,
    width: "auto",
    maxWidth: "70%",
    padding: 0
  },
  bubble: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 3,
    width: "100%"
  },
  extra: {
    paddingHorizontal: 20,
  },
  in: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: ColorX.GetColorCSS("gambotBlue", 0.1),
    backgroundColor: ColorX.GetColorCSS("white", 0.25)
  },
  out: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: ColorX.GetColorCSS("gambotBlue")
  },
  textIn: {
    color: ColorX.GetColorCSS("gambotText"),
  },
  textOut: {
    color: ColorX.GetColorCSS("pureWhite")
  },
  textInAlign: {
    textAlign: "left"
  },
  textOutAlign: {
    textAlign: "right"
  }
});

export default styles;