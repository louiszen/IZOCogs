import React, { Component } from "react";
import { Accessor } from "../../../../../../STATIC";
import PropsType from "prop-types";

/**
 * @augments {Component<Props, State>}
 */
class WMTemplates extends Component {

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WMTemplates.defaultProps))){
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
      <div>

      </div>
    );
  }

}

export default WMTemplates;
