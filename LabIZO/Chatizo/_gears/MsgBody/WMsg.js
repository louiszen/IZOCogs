import React, { Component } from "react";
import { Accessor } from "../../../../STATIC";
import PropsType from "prop-types";
import WMsgSys from "./WMsgSys";
import WBHeader from "./_bubble/WBHeader";
import WBFooter from "./_bubble/WBFooter";
import WBBody from "./_bubble/WBBody";
import { TouchableOpacity } from "react-native";
import styles from "../../_style/msg-bubble";
import WBExtra from "./_bubble/WBExtra";
import { VStack } from "../../../Stackizo";

/**
 * @augments {Component<Props, State>}
 */
class WMsg extends Component {

  static propTypes = {
    onMsgPressed: PropsType.func,
    onMsgLongPressed: PropsType.func,

    showHeader: PropsType.bool,
    showFooter: PropsType.bool,

    canClickOnIn: PropsType.bool,
    canClickOnOut: PropsType.bool,

    ButtonOutSideBubble: PropsType.bool,

    //base func
    _onQuickReply: PropsType.func,

    //runtime
    pos: PropsType.oneOf(["in", "out"]),
    item: PropsType.object,
    last: PropsType.bool,
    typingBubbles: PropsType.bool,
    hideHeader: PropsType.bool
  }

  static defaultProps = {
    onMsgPressed: () => {},
    onMsgLongPressed: undefined,

    showHeader: true,
    showFooter: true,

    canClickOnIn: true,
    canClickOnOut: false,

    ButtonOutSideBubble: true,

    _onQuickReply: () => {},

    pos: "in",
    item: {msg:{text: ""}},
    last: false,
    typingBubbles: false,
    hideHeader: false
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WMsg.defaultProps))){
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

  renderHeader(){
    let {showHeader, typingBubbles, item, pos, hideHeader} = this.props;
    if(pos !== "in" || !showHeader || typingBubbles || hideHeader) return;
    let {user} = item;

    return (
      <WBHeader
        {...this.props}
        sender={user}
        />
    );
  }

  renderMsg(){
    let {item} = this.props;
    let {msg} = item;
    return (
      <WBBody
        {...this.props}
        imsg={msg}
        />
    );
  }

  renderExtra(){
    let {item} = this.props;
    let {msg} = item;
    return (
      <WBExtra
        {...this.props}
        imsg={msg}
        />
    );
  }

  renderFooter(){
    let {showFooter, typingBubbles, item} = this.props;
    if(!showFooter || typingBubbles) return;
    let {createdAt, status, lapseTime} = item;

    return (
      <WBFooter
        {...this.props}
        createdAt={createdAt}
        status={status}
        lapseTime={lapseTime}
        />
    );
  }

  render(){

    let {onMsgPressed, onMsgLongPressed,
      canClickOnIn, canClickOnOut, ButtonOutSideBubble,
      item, pos} = this.props;
    let {_id, msg} = item;

    if(msg && msg.system){
      return (
        <WMsgSys
          {...this.props}
          key={_id}
          text={msg.system}
          />
      );
    }

    let canClick = (canClickOnIn && pos === "in") || (canClickOnOut && pos === "out");

    let style = {
      ...styles.bubble,
    };

    if(pos === "in"){
      style = {
        ...style,
        ...styles.in
      };
    }else{
      style = {
        ...style,
        ...styles.out
      };
    }

    if(canClick){
      return (
        <TouchableOpacity 
          onPress={onMsgPressed} 
          onLongPress={onMsgLongPressed} 
          style={styles.main}> 
          <VStack style={style} alignItems={"flex-start"}>
            {this.renderHeader()}
            {this.renderMsg()}
            {this.renderFooter()}
          </VStack>
          {ButtonOutSideBubble && this.renderExtra()}
        </TouchableOpacity>
      );
    }
    return (
      <VStack style={styles.main}>
        <VStack style={style} alignItems={"flex-start"}>
          {this.renderHeader()}
          {this.renderMsg()}
          {this.renderFooter()}
        </VStack>
        {ButtonOutSideBubble && this.renderExtra()}
      </VStack>
    );
  }

}

export default WMsg;
