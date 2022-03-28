import React, { Component } from "react";
import { Accessor, ColorX, ZFunc } from "../../../../STATIC";
import PropsType from "prop-types";
import { HStack, VStack } from "../../../../LabIZO/Stackizo";
import _ from "lodash";

import styles from "../../_style/inputbar";
import { TextInput } from "react-native";
import RippleIconButton from "../../../../LEGOS/RippleIconButton";
import IconX from "../../../../STATIC/IconX";

/**
 * @augments {Component<Props, State>}
 */
class WInputBar extends Component {

  static propTypes = {

    //Command
    enableCMD: PropsType.bool,
    inCMD: PropsType.bool,

    //Settings
    enableAttach: PropsType.bool,
    enableAudio: PropsType.bool,
    enableRecord: PropsType.bool,

    //attachments
    allowCamera: PropsType.bool,
    allowImage: PropsType.bool,
    allowVideo: PropsType.bool,
    allowFile: PropsType.bool,
    allowLocation: PropsType.bool,
    allowPoll: PropsType.bool,
    allowMusic: PropsType.bool,

    pressEnterToSend: PropsType.bool,
    inputPlaceHolder: PropsType.oneOfType([PropsType.func, PropsType.string]),

    theme: PropsType.string,

    //runtime
    available: PropsType.bool,

    //base functions
    _setShowCMD: PropsType.func,
    _onInputChange: PropsType.func,
    _onSend: PropsType.func,
    input: PropsType.object
  }

  static defaultProps = {
    //Command
    enableCMD: false,
    cmds: {},

    //Settings
    enableAttach: false,
    enableAudio: false,
    enableRecord: false,

    //attachments
    allowCamera: false,
    allowImage: false,
    allowVideo: false,
    allowFile: false,
    allowLocation: false,
    allowPoll: false,
    allowMusic: false,

    pressEnterToSend: true,
    inputPlaceHolder: "Enter your message",

    //runtime
    available: false,

    //base functions
    _setShowCMD: () => {},
    _onInputChange: () => {},
    _onSend: () => {},
    _saveCursor: () => {},
    input: {}
  }

  constructor(){
    super();
    this.state = {
      audioMode: true
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WInputBar.defaultProps))){
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

  // toggleAV = () => {
  //   let {audioMode} = this.state;
  //   this.setState({
  //     audioMode: !audioMode
  //   });
  // }

  // toAudio = () => {
  //   console.log("toAudio");
  // }

  // toRecord = () => {
  //   console.log("toRecord");
  // }

  toCMD = () => {
    console.log("toCMD");
    let {inCMD, _setShowCMD} = this.props;
    _setShowCMD(!inCMD);
  } 

  toAtth = () => {
    console.log("toAtth");
  }

  _isInputEmpty = () => {
    let {input} = this.state;
    return _.isEmpty(input?.text);
  }

  // onKeyDown = (e) => {
  //   let {pressEnterToSend, _onSend} = this.props;
  //   if(pressEnterToSend && e.keyCode === 13 && e.shiftKey === false){
  //     _onSend();
  //     e.preventDefault();
  //   }
  //   return false;
  // }

  onInputChange = (text) => {
    let {_onInputChange} = this.props;
    ZFunc.IfFuncExec(_onInputChange, {text: text});
  }

  // renderImageUpload(){

  // }

  // renderCMDBtn(){
  //   let {theme, enableCMD, inCMD} = this.props;
  //   if(!enableCMD) return;
  //   return (
  //     <Holdable onPress={() => this.toCMD()} key="cmd">
  //       <IconButton className={theme + " chatizo-input-icon" + (inCMD? " in" : "")} size="small">
  //         <Code style={{width:"100%", height: "100%"}}/>
  //       </IconButton>
  //     </Holdable>
  //   );
  // }

  // renderAttachBtn(){
  //   let {theme, enableAttach} = this.props;
  //   if(!enableAttach) return;
  //   return (
  //     <Holdable onPress={() => this.toAtth()} key="atth">
  //       <IconButton className={theme + " chatizo-input-icon"} size="small">
  //         <AttachFile style={{width:"100%", height: "100%"}}/>
  //       </IconButton>
  //     </Holdable>
  //   );

  // }

  // renderAudioRecordBtn(){
  //   let {theme, enableAudio, enableRecord} = this.props;
  //   let {audioMode} = this.state;
  //   if(!enableAudio && !enableRecord) return;

  //   if(enableAudio && (!enableRecord || audioMode)){
  //     return (
  //       <Holdable onPress={() => this.toggleAV()} onLongPress={() => this.toAudio()} key="av">
  //         <IconButton className={theme + " chatizo-input-icon"} size="small">
  //           <Mic style={{width:"100%", height: "100%"}}/>
  //         </IconButton>
  //       </Holdable>
  //     );
  //   }

  //   if(enableRecord && (!enableAudio || !audioMode)){
  //     return (
  //       <Holdable onPress={() => this.toggleAV()} onLongPress={() => this.toRecord()} key="ar">
  //         <IconButton className={theme + " chatizo-input-icon"} size="small">
  //           <RadioButtonChecked style={{width:"100%", height: "100%"}}/>
  //         </IconButton>
  //       </Holdable>
  //     );
  //   }

  // }

  // renderSendBtn(){
  //   let {theme, _onSend} = this.props;
  //   if(!this._isInputEmpty()){
  //     return (
  //       <Holdable onPress={() => _onSend()} key="send">
  //         <IconButton className={theme + " chatizo-input-icon send"} size="small">
  //           <Send style={{width:"100%", height: "100%"}}/>
  //         </IconButton>
  //       </Holdable>
  //     );
  //   }
  // }

  // renderButtons(){
  //   let {inCMD} = this.props;
  //   let rtn = [];
  //   if(this._isInputEmpty() || inCMD){
  //     rtn.push(this.renderCMDBtn());
  //   }

  //   if(this._isInputEmpty()){
  //     rtn.push(
  //       this.renderAttachBtn(),
  //       this.renderAudioRecordBtn()
  //     );
  //   }else{
  //     rtn.push(
  //       this.renderSendBtn()
  //     );
  //   }
  //   return rtn;
  // }

  renderTextField(){
    let {inputPlaceHolder, addOns, available, input} = this.props;
    let ph = ZFunc.IfFuncExec(inputPlaceHolder, addOns);
    return (
      <TextInput
        style={styles.text}
        onChangeText={text => this.onInputChange(text)}
        placeholder={ph}
        value={input?.text || ""}
        editable={available}
        />
    );
  }

  renderCMDBtn(){
    let {enableCMD, inCMD} = this.props;
    if(!enableCMD) return;
    return (
      <RippleIconButton key="cmd" padding={5} onPress={() => this.toCMD()}>
        {IconX.Get("entypo", "code", 25, ColorX.GetColorCSS("grey", inCMD? 0.8: 0.3))}
      </RippleIconButton>
    );
  }

  renderSendBtn(){
    let {_onSend} = this.props;
    if(!this._isInputEmpty()){
      return (
        <RippleIconButton key="send" padding={5} onPress={() => _onSend()}>
          {IconX.Get("mui", "send", 25, ColorX.GetColorCSS("gambotBlue"))}
        </RippleIconButton>
      );
    }
  }

  renderAtthBtn(){
    return (
      <RippleIconButton key="atth" padding={5} onPress={() => this.toAtth()}>
        {IconX.Get("mui", "add-circle", 25, ColorX.GetColorCSS("gambotBlue"))}
      </RippleIconButton>
    );
  }

  renderLeftButtons(){
    return (
      <HStack width="auto">
        {this.renderAtthBtn()}
      </HStack>
    );
  }

  renderRightButtons(){

    let {inCMD} = this.props;
    let rtn = [];
    if(this._isInputEmpty() || inCMD){
      rtn.push(this.renderCMDBtn());
    }

    if(!this._isInputEmpty()){
      rtn.push(
        this.renderSendBtn()
      );
    }
    return (
      <HStack width="auto">
        {rtn}
      </HStack>
    );
  }

  renderMainBar(){
    return (
      <HStack width="100%" style={styles.bar} spacing={5}>
        {this.renderLeftButtons()}
        {this.renderTextField()}
        {this.renderRightButtons()}
      </HStack>
    );
  }

  render(){
    return (
      <VStack width="100%" style={styles.main}>
        {this.renderMainBar()}
      </VStack>
    );
  }

}

export default WInputBar;
