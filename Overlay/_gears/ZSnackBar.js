import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Accessor } from "../../STATIC";
import PropsType from "prop-types";
import HStack from "../../LabIZO/Stackizo/HStack";
import { SnackbarDis } from "../../../__SYSDefault/Theme";

/**
 * @augments {Component<Props, State>}
 */
class ZSnackBar extends Component {

  static propTypes = {
    show: PropsType.bool,
    autoHideDuration: PropsType.number,
    onClose: PropsType.func
  }

  static defaultProps = {
    show: false,
    autoHideDuration: 3000,
    onClose: () => {}
  }

  constructor(){
    super();
    this.state = {
      closing: false
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  _onClose = () => {
    let {onClose, autoHideDuration} = this.props;
    if(onClose){
      this.setState({
        closing: true
      }, () => {
        this.timeout = setTimeout(() => {
          this.setState({
            closing: false
          }, () => {
            onClose();
          })
        }, autoHideDuration);
      })
    } 
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(ZSnackBar.defaultProps))){
      this._setAllStates();
      if(!Accessor.IsIdentical(prevProps, this.props, ["show"])){
        let {show} = this.props;
        let {closing} = this.state;
        if(show && !closing){
          this._onClose();
        }
        if(!show && closing){
          if(this.timeout){
            this.setState({
              closing: false
            }, () => {
              clearTimeout(this.timeout);
            });
          }
        }
      }
      
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

  render(){
    let {show, autoHideDuration, children} = this.props;
    return (
      <View style={{
          bottom: SnackbarDis.offset,
          width: "100%",
          height: "auto",
          alignItems: "center",
          position: "absolute", 
          backgroundColor: "transparent"
        }}>
        {children}
      </View>
    );
  }

}

export default ZSnackBar;
