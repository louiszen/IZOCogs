import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Accessor } from "../../STATIC";
import PropsType from "prop-types";
import HStack from "../../LabIZO/Stackizo/HStack";
import { ContainerStyle } from "../../../__SYSDefault/Theme";
import FadeInOutView from "../../LabIZO/Animatizo/FadeInOutView";

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
          if(this.MountFadeView) {
            this.MountFadeView.fadeOut(200);
          }
          setTimeout(() => {
            this.setState({
              closing: false
            }, () => {
              onClose();
            })
          }, 500);
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
          if(this.MountFadeView) {
            this.MountFadeView.fadeIn(200);
          }
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

  onMountFadeView = (callbacks) => {
    this.MountFadeView = callbacks;
  }

  render(){
    let {children} = this.props;
    return (
      <FadeInOutView 
        onMounted={this.onMountFadeView}
        style={{
          bottom: ContainerStyle.Snackbar.offset,
          width: "100%",
          height: "auto",
          alignItems: "center",
          position: "absolute", 
          backgroundColor: "transparent"
        }}>
        {children}
      </FadeInOutView>
    );
  }

}

export default ZSnackBar;
