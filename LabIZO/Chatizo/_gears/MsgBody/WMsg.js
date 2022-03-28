import React, { Component } from "react";
import { Accessor } from "../../../../STATIC";
import PropsType from "prop-types";
import WMsgSys from "./WMsgSys";
import WBHeader from "./_bubble/WBHeader";
import WBFooter from "./_bubble/WBFooter";
import WBBody from "./_bubble/WBBody";
import RippleButton from "../../../../LEGOS/RippleButton";
import { View } from "react-native";
import styles from "../../_style/msg-bubble";

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
      canClickOnIn, canClickOnOut,
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
      ...styles.main,
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
        <RippleButton 
          onPress={onMsgPressed} 
          onLongPress={onMsgLongPressed} 
          style={style}> 
          {this.renderHeader()}
          {this.renderMsg()}
          {this.renderFooter()}
        </RippleButton>
      );
    }
    return (
      <View style={style}>
        {this.renderHeader()}
        {this.renderMsg()}
        {this.renderFooter()}
      </View>
    );
  }

}

export default WMsg;
