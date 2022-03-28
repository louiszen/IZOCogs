import React, { Component } from "react";
import { Pressable, ViewPropTypes } from "react-native";
import { Accessor, ColorX } from "../STATIC";
import PropsType from "prop-types";
import Ripple from "react-native-material-ripple";

/**
 * @augments {Component<Props, State>}
 */
class RippleIconButton extends Component {

  static propTypes = {
    padding: PropsType.number,
    rippleColor: PropsType.string,
    rippleOpacity: PropsType.number,
    rippleDuration: PropsType.number,
    rippleSize: PropsType.number,
    rippleContainerBorderRadius: PropsType.number,
    rippleCentered: PropsType.bool,
    rippleSequential: PropsType.bool,
    rippleFades: PropsType.bool,
    disabled: PropsType.bool,
    onPressIn: PropsType.func,
    onPressOut: PropsType.func,
    onPress: PropsType.func,
    onLongPress: PropsType.func,
    onRippleAnimation: PropsType.func,
    style: ViewPropTypes.style
  }

  static defaultProps = {
    padding: 10,
    rippleColor: ColorX.GetColorCSS("black"),
    rippleOpacity: 0.3,
    rippleDuration: 400,
    rippleSize: 0,
    rippleContainerBorderRadius: 50,
    rippleCentered: true,
    rippleSequential: false, 
    rippleFades: true, 
    disabled: false, 
    onPressIn: undefined,
    onPressOut: undefined,
    onPress: undefined,
    onLongPress: undefined,
    onRippleAnimation: undefined,
    style: {}
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(RippleIconButton.defaultProps))){
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

  render(){
    let {children, 
      padding,
      disabled, 
      onPress,
      onLongPress,
      style,
      ...other} = this.props;
    return (
      <Ripple {...other} 
        onPress={onPress} onLongPress={onLongPress? onLongPress: onPress}
        style={{padding: padding, ...style, opacity: disabled? 0.5: 1}} 
        disabled={disabled}>
        {children}
      </Ripple>
    );
  }

}

export default RippleIconButton;
