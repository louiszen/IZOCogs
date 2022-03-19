import React, { Component } from "react";
import { Text, View } from 'react-native';

import PropsType from "prop-types";
import _ from "lodash";
import { Colors, IconButton } from "react-native-paper";

import { Accessor, ColorX } from "../../STATIC";
import { HStack, VStack } from "../../LabIZO/Stackizo";
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo'; 
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 
import { ContainerStyle } from "../../../__SYSDefault/Theme";
import IconX from "../../STATIC/IconX";

/**
 * Snack Alert for IZO Container
 * @augments {Component<Props, State>}
 */
class SnackAlert extends Component {

  static propTypes = {
    severity: PropsType.string,
    message: PropsType.any,
    onClose: PropsType.func
  }

  static defaultProps = {
    severity: "success",
    message: "",
    onClose: () => {}
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(SnackAlert.defaultProps))){
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

  _close = () => {
    let {onClose} = this.state;
    if(onClose) onClose();
  }

  bgColor = () => {
    let {severity} = this.state;
    switch(severity){
      default: case "success": return ColorX.GetColorCSS("Success", 0.9);
      case "warn": case "warning": return ColorX.GetColorCSS("Warn", 0.9);
      case "info": return ColorX.GetColorCSS("Info", 0.9);
      case "error": return ColorX.GetColorCSS("Error", 0.9);
    }
  }

  renderIconBySeverity(){
    let {severity} = this.state;
    let {iconSize, color} = ContainerStyle.Snackbar;
    switch(severity){
      default: case "none": return;
      case "success": return IconX.Get("ant", "staro", iconSize, color);
      case "warn": case "warning": return IconX.Get("ionic", "warning", iconSize, color);
      case "info": return IconX.Get("feather", "info", iconSize, color);
      case "error": return IconX.Get("mui", "error-outline", iconSize, color);
    }
  }

  renderClose(){
    let {iconSize, color} = ContainerStyle.Snackbar;
    return (
      <IconButton icon="close" onPress={() => this._close()} size={iconSize} color={color}/>
    );
      
  }

  renderInside(){
    let {message} = this.props;
    let {fontSize, color} = ContainerStyle.Snackbar;
    if(!_.isEmpty(message)){
      let msgs = message.toString().split("\n");
      let jsx = [];
      _.map(msgs, (o, i) => {
        jsx.push(<Text style={{fontSize: fontSize, color: color}} key={i}>{o}</Text>);
      });
      return (
        <HStack width="auto" spacing={10} style={{
            paddingVertical: 2,
            paddingLeft: 15,
            paddingRight: 5
          }}>
          {this.renderIconBySeverity()}
          <VStack spacing={1}>
            {jsx}
          </VStack>
          {this.renderClose()}
        </HStack>
      );
    }
  }

  render(){
    let {message} = this.props;
    return (
      <HStack
        width="auto"
        elevation={3}
        style={{
          backgroundColor: this.bgColor(),
          padding: !_.isEmpty(message)? 1: 0,
          borderRadius: 25,
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1
          }
        }}
        >
        {this.renderInside()}
      </HStack>
    );
  }

}

export default SnackAlert;
