import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Accessor } from "../../../src/IZOCogs/STATIC";
import { observer } from "mobx-react";
import PropsType from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

/**
 * @augments {Component<Props, State>}
 */
class Container extends Component {

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Container.defaultProps))){
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
    let {children} = this.props;
    return (
      <View style={styles.container}>
        {children}
      </View>
    );
  }

}

export default observer(Container);
