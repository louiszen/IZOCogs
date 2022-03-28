import React, { Component } from "react";
import { Accessor, ZFunc } from "../../../../STATIC";
import PropsType from "prop-types";
import { Text, View } from "react-native";
import styles from "../../_style/msg-system";

/**
 * @augments {Component<Props, State>}
 */
class WMsgSys extends Component {

  static propTypes = {
    text: PropsType.oneOfType([PropsType.string, PropsType.func]),
    addOns: PropsType.object
  }

  static defaultProps = {
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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WMsgSys.defaultProps))){
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
    let {text, addOns} = this.props;
    let stext = ZFunc.IfFuncExec(text, addOns);
    return (
      <View style={styles.main}>
        <Text style={styles.text}>
          {stext}
        </Text>
      </View>
    );
  }

}

export default WMsgSys;
