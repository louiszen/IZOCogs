import React, { Component } from "react";
import { View } from "react-native";
import { Accessor } from "${2}/src/IZOCogs/STATIC";
import PropsType from "prop-types";

/**
 * @augments {Component<Props, State>}
 */
class ${1} extends Component {

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(${1}.defaultProps))){
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

      </View>
    );
  }

}

export default ${1};
