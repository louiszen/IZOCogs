import React, { Component } from "react";
import { View, ViewPropTypes } from "react-native";
import { Accessor } from "../STATIC";
import PropsType from "prop-types";

/**
 * @augments {Component<Props, State>}
 */
class SwipeableView extends Component {

  static propTypes = {
    style: ViewPropTypes.style,
    onSwipeUp: PropsType.func,
    onSwipeDown: PropsType.func,
    onSwipeLeft: PropsType.func,
    onSwipeRight: PropsType.func
  }

  static defaultProps = {
    style: {},
    onSwipeUp: () => {},
    onSwipeDown: () => {},
    onSwipeLeft: () => {},
    onSwipeRight: () => {}
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(SwipeableView.defaultProps))){
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
    let {style, children, onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight} = this.props;
    return (
      <View
        onTouchStart={e=> {
          this.touchY = e.nativeEvent.pageY; 
          this.touchX = e.nativeEvent.pageX;
        }}
        onTouchEnd={e => {
          let {pageX, pageY} = e.nativeEvent;
          let shiftY = this.touchY - pageY;
          let shiftX = this.touchX - pageX;

          if(Math.abs(shiftX) > Math.abs(shiftY)){
            if (shiftX < -20){
              if(onSwipeRight) onSwipeRight();
            }else if (shiftX > 20){
              if(onSwipeLeft) onSwipeLeft();
            }
          }else{
            if (shiftY > 20){
              if(onSwipeUp) onSwipeUp();
            }else if (shiftY < -20){
              if(onSwipeDown) onSwipeDown();
            }
          }
        }}
        style={style}
      >
        {children}
      </View>
    );
  }

}

export default SwipeableView;
