import React, { Component } from "react";
import { Animated, ViewPropTypes } from "react-native";
import { Accessor } from "../../STATIC";
import { observer } from "mobx-react";
import PropsType from "prop-types";

/**
 * @augments {Component<Props, State>}
 */
class FadeInOutView extends Component {

  static propTypes = {
    onMounted: PropsType.func,
    style: ViewPropTypes.style
  }

  static defaultProps = {
    onMounted: null,
    style: {}
  }

  constructor(){
    super();
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(FadeInOutView.defaultProps))){
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
          fadeIn: this.fadeIn,
          fadeOut: this.fadeOut
        });
      }
      if(callback) callback();
    });
  }

  fadeIn = (duration) => {
    this.setState({
      fadeAnim: new Animated.Value(0)
    }, () => {
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true
      }).start();
    });
  };

  fadeOut = (duration) => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true
    }).start();
  };

  render(){
    let {style, children} = this.props;
    let {fadeAnim} = this.state;
    return (
      <Animated.View style={{...style, opacity: fadeAnim}}>
        {children}
      </Animated.View>
    );
  }

}

export default observer(FadeInOutView);
