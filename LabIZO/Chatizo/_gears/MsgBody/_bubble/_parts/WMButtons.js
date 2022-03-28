import React, { Component } from "react";
import { Accessor, ZFunc } from "../../../../../../STATIC";
import PropsType from "prop-types";
import { HStack, VStack } from "../../../../../../LabIZO/Stackizo";

import _ from "lodash";
import { Text, View } from "react-native";
import RippleButton from "../../../../../../LEGOS/RippleButton";

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
    let {theme, buttons, 
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

      let textClass = theme + " chatizo-msg-btn-text" 
      + (disabled? " disabled" : "")
      + (o.color? (" " + o.color) : "");

      let sTitle = ZFunc.IfFuncExec(o.title, addOns);
      if(_.isString(sTitle)){
        sTitle = (
          <Text className={textClass}>
            {sTitle}
          </Text>
        );
      }

      rendered.push(
        <View key={i} className={theme + " chatizo-msg-btn" 
          + (disabled? " disabled" : "") 
          + (buttonWidthFitContent? " fitcontent" : "")
          + (o.color? (" " + o.color) : "")}>
          <RippleButton onPress={func} disabled={disabled}>
            <HStack>
              {sTitle}
            </HStack>
          </RippleButton>
        </View>
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
