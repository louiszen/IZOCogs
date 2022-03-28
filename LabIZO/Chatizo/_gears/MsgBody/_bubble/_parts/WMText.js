import React, { Component } from "react";
import { Accessor } from "../../../../../../STATIC";
import PropsType from "prop-types";
import HTMLView from 'react-native-htmlview';

import _ from "lodash";
import { Text, View } from "react-native";
import styles from "../../../../_style/msg-text";
import stylesb from "../../../../_style/msg-bubble";

/**
 * @augments {Component<Props, State>}
 */
class WMText extends Component {

  static propTypes = {
    addOns: PropsType.object,

    hideLongAnswer: PropsType.bool,
    longAnswerLength: PropsType.number,
    readMoreCaption: PropsType.oneOfType([PropsType.func, PropsType.string]),
    revertReadMore: PropsType.bool,
    readLessCaption: PropsType.oneOfType([PropsType.func, PropsType.string]),

    HTMLEnabled: PropsType.bool,
    pos: PropsType.string,

    //runtime
    otext: PropsType.oneOfType([PropsType.string, PropsType.func]),
  }

  static defaultProps = {
    otext: "",
    addOns: {}
  }

  constructor(){
    super();
    this.state = {
      hide: true
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WMText.defaultProps))){
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

  setHide = (f) => {
    this.setState({
      hide: f
    });
  }

  renderReadMore(){
    let {theme, readMoreCaption} = this.state;
    return (
      <Text key="readmore" className={theme + " chatizo-msg-text-readmore"} onClick={() => this.setHide(false)}>
        {readMoreCaption}
      </Text>
    );
  }

  renderReadLess(){
    let {theme, readLessCaption} = this.state;
    return (
      <Text key="readless" className={theme + " chatizo-msg-text-readmore"} onClick={() => this.setHide(true)}>
        {readLessCaption}
      </Text>
    );
  }

  renderText(){
    let {HTMLEnabled, hideLongAnswer, longAnswerLength,
      revertReadMore, hide, otext, pos} = this.props;
      
    let rtn = [];

    let ext = pos === "in"? stylesb.textIn: stylesb.textOut;
  
    if(HTMLEnabled){
      rtn = (
        <HTMLView
          value={otext}
          stylesheet={styles.text}/>
      );
    }else{    
      if(hideLongAnswer){
        if(otext.length > longAnswerLength){
          let showText = otext.substring(0, longAnswerLength);
          let hideText = otext.substring(longAnswerLength);

          rtn = [
            <View>
              <Text key="showtext" style={{...styles.text, ...ext}}>
                {showText}
              </Text>
              {
                !hide &&
                <Text key="hidetext" style={{...styles.text, ...ext}}>
                  {hideText}
                </Text>
              }
              {
                hide &&
                this.renderReadMore()
              }
              {
                !hide && revertReadMore &&
                this.renderReadLess()
              }
            </View>
          ];
        }else{
          rtn = (
            <Text style={{...styles.text, ...ext}}>
              {otext}
            </Text>
          )
        }
      }else{
        rtn = (
          <Text style={{...styles.text, ...ext}}>
            {otext}
          </Text>
        )
      }
    }

    return rtn;

  }

  render(){
    return (
      <View style={styles.main}>
        {this.renderText()}
      </View>
    );
  }

}

export default WMText;
