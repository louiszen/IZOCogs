import React, { Component } from "react";
import { Accessor, ZFunc } from "../../../../../STATIC";
import PropsType from "prop-types";
import RippleButton from "../../../../../LEGOS/RippleButton";
import { Text } from "react-native";
import styles from "../../../_style/msg-header";
import { HStack, Spacer } from "../../../../Stackizo";

/**
 * @augments {Component<Props, State>}
 */
class WBHeader extends Component {

  static propTypes = {
    sender: PropsType.shape({
      ID: PropsType.string,
      name: PropsType.string,
      avatar: PropsType.oneOfType([PropsType.func, PropsType.string, PropsType.object, PropsType.node]),
    }),

    onHeaderClicked: PropsType.func,
  }

  static defaultProps = {
    sender: {},
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WBHeader.defaultProps))){
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
    let { sender, onHeaderClicked } = this.props;
    return (
      <HStack>
        <RippleButton onPress={() => ZFunc.IfFuncExec(onHeaderClicked, sender)} style={styles.main}>
          <Text style={styles.text}>
            {sender.name}
          </Text>
        </RippleButton>
        <Spacer/>
      </HStack>
    );
  }

}

export default WBHeader;
