import React, { Component } from "react";
import { Accessor } from "../../../../STATIC";
import PropsType from "prop-types";
import { View } from "react-native";
import styles from "../../_style/msg-bubble";
import WBExtra from "./_bubble/WBExtra";

/**
 * @augments {Component<Props, State>}
 */
class WMsgExtra extends Component {

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WMsgExtra.defaultProps))){
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

  renderMsg(){
    let {item} = this.props;
    let {msg} = item;
    return (
      <WBExtra
        {...this.props}
        imsg={msg}
        />
    );
  }

  render(){

    let {item, pos} = this.props;
    let {_id, msg} = item;

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

    return (
      <View style={style}>
        {this.renderMsg()}
      </View>
    );
  }

}

export default WMsgExtra;
