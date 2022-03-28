import { StyleSheet } from "react-native";
import { ColorX } from "../../../STATIC";

let styles = StyleSheet.create({
  main: {
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 10
  },
  datetime: {
    flexGrow: 1,
    textAlign: "right",
    fontSize: 10
  },
  status: {
    marginRight: 10,
    fontSize: 10
  },
  lapse: {
    fontSize: 10,
    textAlign: "left",
    flexGrow: 1,
    fontStyle: "italic",
    marginRight: 10
  }
});

export default styles;