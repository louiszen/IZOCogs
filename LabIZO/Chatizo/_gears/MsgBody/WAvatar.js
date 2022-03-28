import React, { Component } from "react";
import { Accessor } from "../../../../STATIC";
import PropsType from "prop-types";
import { Image, View } from "react-native";
import RippleIconButton from "../../../../LEGOS/RippleIconButton";
import styles from "../../_style/avatar";
import _ from "lodash";
import { DOMAIN } from "../../../../../__SYSDefault/Domain";

const defaultAvatar = require("../../../../../../assets/avatar.png");

/**
 * @augments {Component<Props, State>}
 */
class WAvatar extends Component {

  static propTypes = {
    theme: PropsType.string,

    iuser: PropsType.shape({
      ID: PropsType.string,
      name: PropsType.string,
      avatar: PropsType.oneOfType([PropsType.func, PropsType.string, PropsType.object, PropsType.node]),
    }),

    hideImg: PropsType.bool,

    onAvatarClicked: PropsType.func,

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WAvatar.defaultProps))){
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

  renderImg(){
    let {iuser, hideImg} = this.props;
    if(hideImg || !iuser) return;

    if(_.isString(iuser?.avatar?.uri)){
      let uri = iuser?.avatar?.uri;
      if(!iuser?.avatar?.uri?.startsWith("http")){
        uri = DOMAIN + uri;
      }
      return (
        <Image source={{uri: uri}} defaultSource={defaultAvatar} style={styles.img} />
      );
    }else{
      return (
        <Image source={iuser?.avatar} defaultSource={defaultAvatar} style={styles.img} />
      );
    }
  }

  render(){
    let {onAvatarClicked} = this.props;
    return (
      <RippleIconButton onLongPress={onAvatarClicked} padding={0} style={styles.main}>
        {this.renderImg()}
      </RippleIconButton>
    );
  }

}

export default WAvatar;
