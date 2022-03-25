import React, { Component } from "react";
import { Accessor, ZFunc } from "../../../../../../STATIC";
import PropsType from "prop-types";
import { HStack, VStack } from "../../../../../../LabIZO/Stackizo";
import Holdable from "../../../../../../LabIZO/Controlizo/Holdable";
import { Typography } from "@mui/material";

import _ from "lodash";
import { Box } from "@mui/system";

/**
 * @augments {Component<Props, State>}
 */
class WMButtons extends Component {

  static propTypes = {
    theme: PropsType.string,
    buttons: PropsType.array,
    disabled: PropsType.bool,

    _onQuickReply: PropsType.func,
    onWebClicked: PropsType.func,
    onPhoneClicked: PropsType.func,
    buttonWidthFitContent: PropsType.bool,
    
    addOns: PropsType.object
  }

  static defaultProps = {
    themeCSS: "",
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
          <Typography className={textClass}>
            {sTitle}
          </Typography>
        );
      }

      rendered.push(
        <Box key={i} className={theme + " chatizo-msg-btn" 
          + (disabled? " disabled" : "") 
          + (buttonWidthFitContent? " fitcontent" : "")
          + (o.color? (" " + o.color) : "")}>
          <Holdable onPress={func} disabled={disabled}>
            <HStack>
              {sTitle}
            </HStack>
          </Holdable>
        </Box>
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
