import React, { Component } from "react";
import { View } from "react-native";
import { Accessor } from "${2}/src/IZOCogs/STATIC";
import { observer } from "mobx-react";
import PropsType from "prop-types";

/**
 * @augments {Component<Props, State>}
 */
class ${1} extends Component {

  static propTypes = {
    onMounted: PropsType.func,
  }

  static defaultProps = {
    onMounted: null,
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
    }), () => {
      if(this.props.onMounted){
        this.props.onMounted({
          
        });
      }
      if(callback) callback();
    });
  }

  render(){
    return (
      <View>

      </View>
    );
  }

}

export default observer(${1});
