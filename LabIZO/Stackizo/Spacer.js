import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

import PropsType from "prop-types";
import _ from "lodash";

import { Accessor } from "../../STATIC";

/**
 * Flex grow spacer for alignment
 * @augments {Component<Props, State>}
 */
class Spacer extends Component {

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Spacer.defaultProps))){
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
      <View style={{
          flexGrow: 1
        }}
        {...this.props}
        />
    );
  }

}

export default Spacer;
