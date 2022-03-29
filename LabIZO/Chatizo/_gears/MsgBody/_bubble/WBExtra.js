import React, { Component } from "react";
import { Accessor } from "../../../../../STATIC";
import PropsType from "prop-types";
import { VStack } from "../../../../Stackizo";
import WMText from "./_parts/WMText";
import WMButtons from "./_parts/WMButtons";
import styles from "../../../_style/msg-bubble";
// import WMTyping from "./_parts/WMTyping";
// import WMImage from "./_parts/WMImage";
// import WMVideo from "./_parts/WMVideo";
// import WMImgButtons from "./_parts/WMImgButtons";

/**
 * @augments {Component<Props, State>}
 */
class WBExtra extends Component {

  static propTypes = {

    pos: PropsType.string,

    showQuickRepliesAsButtons: PropsType.bool,
    disableButtonsAfterSend: PropsType.bool, 
    disableTemplateButtonsAfterSend: PropsType.bool,
    typingBubbles: PropsType.bool,
    last: PropsType.bool,

    imsg: PropsType.object
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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WBExtra.defaultProps))){
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

  renderText(otext){
    return (
      <WMText
        {...this.props}
        otext={otext}
        />
    );
  }

  // renderImage(oimage){
  //   return (
  //     <WMImage
  //       {...this.props}
  //       oimage={oimage}
  //       />
  //   );
  // }

  // renderVideo(ovideo){
  //   return (
  //     <WMVideo
  //       {...this.props}
  //       ovideo={ovideo}
  //       />
  //   );
  // }

  renderButtons(xbtns){
    return (
      <WMButtons
        {...this.props}
        buttons={xbtns}
        />
    );
  }

  // renderImgButtons(oimgbtns){
  //   return (
  //     <WMImgButtons
  //       {...this.props}
  //       oimgbtns={oimgbtns}
  //       />
  //   );
  // }

  // renderTemplates(otemplates){

  // }

  render(){
    let {imsg, theme, showQuickRepliesAsButtons, typingBubbles} = this.props;
    // if (typingBubbles){
    //   return (
    //     <VStack width="100%" className={theme + " chatizo-msg-body"}>
    //       <WMTyping {...this.props}/>
    //     </VStack>
    //   );
    // }
    return (
      <VStack width="100%" style={styles.extra}>
        {/* {showQuickRepliesAsButtons && imsg.quickReplies && this.renderButtons(imsg.quickReplies)} */}
        {imsg.buttons && this.renderButtons(imsg.buttons)}
        {/* {imsg.imgButtons && this.renderImgButtons(imsg.imgButtons)} */}
        {/* {imsg.templates && this.renderTemplates(imsg.tempaltes)} */}
      </VStack>
    );
  }

}

export default WBExtra;
