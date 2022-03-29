import { StyleSheet } from "react-native";
import { ColorX } from "../../../STATIC";

let styles = StyleSheet.create({
  main: {
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
    width: "auto"
  },
  in: {
    paddingRight: 10,
  },
  out: {
    paddingLeft: 10,
  },
  text: {
    fontSize: 10
  },
  datetime: {
    flexGrow: 1,
    textAlign: "right",
    fontSize: 10,
    opacity: 0.5
  },
  status: {
    marginRight: 10,
    fontSize: 10,
    opacity: 0.5
  },
  lapse: {
    fontSize: 10,
    textAlign: "left",
    flexGrow: 1,
    fontStyle: "italic",
    marginRight: 10,
    opacity: 0.5
    
  }
});

export default styles;