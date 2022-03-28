import React, { Component } from "react";
import { Accessor, ZTime, IconX } from "../../../../../STATIC";
import PropsType from "prop-types";
import { HStack } from "../../../../../LabIZO/Stackizo";
import { Text, View } from "react-native";
import styles from "../../../_style/msg-footer";
import stylesb from "../../../_style/msg-bubble";

/**
 * @augments {Component<Props, State>}
 */
class WBFooter extends Component {

  static propTypes = {
    showStatus: PropsType.bool,
    showDateTime: PropsType.bool,
    showLapseTime: PropsType.bool,

    pos: PropsType.string,
    createdAt: PropsType.oneOfType([PropsType.object, PropsType.string]),
    status: PropsType.string,
    lapseTime: PropsType.number,
    
  };

  static defaultProps = {

  };

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WBFooter.defaultProps))){
      this._setAllStates();
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  _setAllStates = (callback) => {
    this.setState((state, props) => ({
      ...props,
    }), callback);
  }

  renderLapseTime(){
    let { showLapseTime, lapseTime, pos } = this.props;
    if(!showLapseTime || !lapseTime) return;

    let ext = pos === "in"? stylesb.textIn: stylesb.textOut;

    return (
      <Text style={{...styles.lapse, ...ext}}>
        {lapseTime + "s"}
      </Text>
    );
  }

  renderStatus(){
    let { showStatus, status, pos } = this.props;
    if(!showStatus) return;

    let fontSize = 12;
    let color = "white";

    let icon = <View/>;
    switch(status){
      case "pending":
        icon = IconX.Get("ant", "clockcircleo", fontSize, color);
        break;
      case "sent":
        icon = IconX.Get("muicom", "check", fontSize, color);
        break;
      case "received": 
      icon = IconX.Get("muicom", "check", fontSize, color);
        break;
      case "read":
        icon = IconX.Get("muicom", "check-all", fontSize, color);
        break;
      case "error":
        icon = IconX.Get("mui", "error-outline", fontSize, color);
        break;
      default:
        icon = IconX.Get("ant", "clockcircleo", fontSize, color);
        break;
    }

    let ext = pos === "in"? stylesb.textIn: stylesb.textOut;

    return (
      <View style={{...styles.status, ...ext}}>
        {icon}
      </View>
    );
  }

  renderDateTime(){
    let { showDateTime, createdAt, pos } = this.props;
    if(!showDateTime) return;
    let format = "HH:mm";
    let createdAtM = ZTime.Moment(createdAt);
    if(ZTime.Now().date !== createdAtM.date){
      format = "DD MMM HH:mm";
    }
    if(ZTime.Now().year !== createdAtM.year){
      format = "DD MMM, YYYY HH:mm";
    }

    let ext = pos === "in"? stylesb.textIn: stylesb.textOut;

    return (
      <Text style={{...styles.datetime, ...ext}}>
        {createdAtM.format(format)}
      </Text>
    );
  }

  render(){
    let { pos } = this.props;
    return (
      <HStack style={styles.main}>
        {pos === "in" && this.renderLapseTime()}
        {pos === "out" && this.renderStatus()}
        {this.renderDateTime()}
      </HStack>
    );
  }
}

export default WBFooter;
