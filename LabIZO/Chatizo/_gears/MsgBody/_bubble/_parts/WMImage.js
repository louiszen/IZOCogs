import React, { Component } from "react";
import { Accessor } from "../../../../../../STATIC";
import PropsType from "prop-types";
import RippleButton from "../../../../../../LEGOS/RippleButton";
import { View } from "react-native-web";
import { Image } from "react-native";

/**
 * @augments {Component<Props, State>}
 */
class WMImage extends Component {

  static propTypes = {
    oimage: PropsType.object,
    _onImageClicked: PropsType.func,
  }

  static defaultProps = {
    oimage: {},
    _onImageClicked: () => {}
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WMImage.defaultProps))){
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
    let {theme, oimage, _onImageClicked} = this.props;
    return (
      <RippleButton onPress={_onImageClicked}>
        <View className={theme + " chatizo-msg-image"} style={oimage.style}>
          <Image source={oimage.src} alt=""/>
        </View>
      </RippleButton>
    );
  }

}

export default WMImage;
