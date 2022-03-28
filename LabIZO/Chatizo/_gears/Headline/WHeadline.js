import React, { Component } from "react";
import { Accessor, ColorX, ZFunc } from "../../../../STATIC";
import PropsType from "prop-types";
import { HStack, Spacer } from "../../../../LabIZO/Stackizo";
import { Image, Text, View, TouchableOpacity, TouchableNativeFeedback, Pressable } from "react-native";
import IconX from "../../../../STATIC/IconX";

import styles from "../../_style/headline";
import { TouchableRipple } from "react-native-paper";
import RippleIconButton from "../../../../LEGOS/RippleIconButton";

/**
 * @augments {Component<Props, State>}
 */
class WHeadline extends Component {

  static propTypes = {
    theme: PropsType.string,
    iconSrc: PropsType.oneOfType([PropsType.func, PropsType.string, PropsType.object, PropsType.node]),
    text: PropsType.oneOfType([PropsType.string, PropsType.func]),

    addOns: PropsType.object,
  }

  static defaultProps = {
    theme: "",
    iconSrc: "",
    text: "",

    addOns: {}
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WHeadline.defaultProps))){
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

  renderText(){
    let {theme, addOns, text} = this.props;
    text = ZFunc.IfFuncExec(text, addOns);
    return (
      <Text style={styles.text}>
        {text}
      </Text>
    );
  }

  renderIcon(){
    let {theme, addOns, iconSrc} = this.props;
    iconSrc = ZFunc.IfFuncExec(iconSrc, addOns);
    return (
      <View style={styles.icon}>
        <Image source={iconSrc} style={{width: "100%", height: "100%"}}/>
      </View>
    );
  }

  renderSettings(){
    return (
      <RippleIconButton onPress={() => {}} onLongPress={() => {}}>
        {IconX.Get("entypo", "dots-three-vertical", 20, "white")}
      </RippleIconButton>
    ); 
  }

  render(){
    return (
      <HStack style={styles.main}>
        {this.renderIcon()}
        {this.renderText()}
        <Spacer/>
        {this.renderSettings()}
      </HStack>
    );
  }

}

export default WHeadline;
