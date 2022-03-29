import React, { Component } from "react";
import { Accessor, ColorX, ZFunc } from "../../../../../../STATIC";
import PropsType from "prop-types";
import { HStack, VStack, Spacer } from "../../../../../../LabIZO/Stackizo";

import _ from "lodash";
import { Text, View } from "react-native";
import RippleButton from "../../../../../../LEGOS/RippleButton";
import styles from "../../../../_style/msg-button";

/**
 * @augments {Component<Props, State>}
 */
class WMButtons extends Component {

  static propTypes = {
    buttons: PropsType.array,
    disabled: PropsType.bool,

    _onQuickReply: PropsType.func,
    onWebClicked: PropsType.func,
    onPhoneClicked: PropsType.func,
    buttonWidthFitContent: PropsType.bool,
    
    addOns: PropsType.object
  }

  static defaultProps = {
    buttons: [],
    disabled: false
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WMButtons.defaultProps))){
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

  renderButtons(){
    let {buttons, 
      _onQuickReply, onPhoneClick, onWebClick, 
      disabled, buttonWidthFitContent, addOns} = this.props;

    let rendered = [];
    _.map(buttons, (o, i) => {
      let func = null;
      switch (o.type){
        case "web":
          func = () => onWebClick(o.payload);
          break;
        case "phone":
          func = () => onPhoneClick(o.payload);
          break;
        default:
          func = () => _onQuickReply(o);
          break;
      } 

      let textStyle = styles.text;

      if(o.color){
        textStyle = {...textStyle, color: ColorX.GetColorCSS(o.color)};
      }

      let sTitle = ZFunc.IfFuncExec(o.title, addOns);
      if(_.isString(sTitle)){
        sTitle = (
          <Text style={textStyle}>
            {sTitle}
          </Text>
        );
      }

      let style = styles.main;

      if(disabled) style = {...style, ...styles.disabled};
      if(buttonWidthFitContent) style = {...style, ...styles.fitContent};

      if(o.color){
        style = {...style, borderColor: ColorX.GetColorCSS(o.color, 0.5)};
      }

      rendered.push(
        <RippleButton key={i} onPress={func} 
          disabled={disabled} style={style}>
          <HStack>
            <Spacer/>
              {sTitle}
            <Spacer/>
          </HStack>
        </RippleButton>
      );
    });
    return rendered;
  }

  render(){
    return (
      <VStack justifyContent="center">
        {this.renderButtons()}
      </VStack>
    );
  }

}

export default WMButtons;
