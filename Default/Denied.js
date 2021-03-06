import React, { Component } from "react";
import { View, Text } from "react-native";
import { Accessor } from "../../../src/IZOCogs/STATIC";
import PropsType from "prop-types";

/**
 * @augments {Component<Props, State>}
 */
class Denied extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Denied.defaultProps))){
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
    return (
      <View>
        <Text>Not Match</Text>
      </View>
    );
  }

}

export default Denied;
