import React, { Component } from "react";
import { Accessor, ZTime } from "../../../../../STATIC";
import PropsType from "prop-types";
import { HStack } from "../../../../../LabIZO/Stackizo";
import { Box } from "@mui/system";

/**
 * @augments {Component<Props, State>}
 */
class WBFooter extends Component {

  static propTypes = {
    theme: PropsType.string,

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
    let { theme, showLapseTime, lapseTime } = this.state;
    if(!showLapseTime || !lapseTime) return;
    return (
      <Box className={theme + " chatizo-msg-footer-lapse"}>
        {lapseTime + "s"}
      </Box>
    );
  }

  renderStatus(){
    let { theme, showStatus, status } = this.state;
    if(!showStatus) return;

    let icon = <div/>;
    switch(status){
      case "pending":
        icon = <i className="fas fa-clock"/>;
        break;
      case "sent":
        icon = <i className="fas fa-check"/>;
        break;
      case "received": 
      icon = <i className="fas fa-check-double"/>;
        break;
      case "read":
        icon = <i className="fas fa-book-reader"/>;
        break;
      case "error":
        icon = <i className="fas fa-times"/>;
        break;
      default:
        icon = <i className="fas fa-clock"/>; 
        break;
    }

    return (
      <Box  className={theme + " chatizo-msg-footer-status"}>
        {icon}
      </Box>
    );
  }

  renderDateTime(){
    let { theme, showDateTime, createdAt } = this.state;
    if(!showDateTime) return;
    let format = "HH:mm";
    let createdAtM = ZTime.Moment(createdAt);
    if(ZTime.Now().date !== createdAtM.date){
      format = "DD MMM HH:mm";
    }
    if(ZTime.Now().year !== createdAtM.year){
      format = "DD MMM, YYYY HH:mm";
    }

    return (
      <Box className={theme + " chatizo-msg-footer-datetime"}>
        {createdAtM.format(format)}
      </Box>
    );
  }

  render(){
    let { theme, pos } = this.state;
    return (
      <HStack className={theme + " chatizo-msg-footer-main"}>
        {pos === "in" && this.renderLapseTime()}
        {pos === "out" && this.renderStatus()}
        {this.renderDateTime()}
      </HStack>
    );
  }
}

export default WBFooter;
