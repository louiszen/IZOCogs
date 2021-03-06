import React, { Component } from "react";
import { Accessor } from "../../../../../STATIC";
import PropsType from "prop-types";
import { VStack } from "../../../../../LabIZO/Stackizo";
import WMText from "./_parts/WMText";
import WMButtons from "./_parts/WMButtons";
// import WMTyping from "./_parts/WMTyping";
// import WMImage from "./_parts/WMImage";
// import WMVideo from "./_parts/WMVideo";
// import WMImgButtons from "./_parts/WMImgButtons";

/**
 * @augments {Component<Props, State>}
 */
class WBBody extends Component {

  static propTypes = {

    pos: PropsType.string,

    ButtonOutSideBubble: PropsType.bool,

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
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WBBody.defaultProps))){
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
    let {imsg, theme, showQuickRepliesAsButtons, typingBubbles, ButtonOutSideBubble} = this.props;
    // if (typingBubbles){
    //   return (
    //     <VStack width="100%" className={theme + " chatizo-msg-body"}>
    //       <WMTyping {...this.props}/>
    //     </VStack>
    //   );
    // }
    return (
      <VStack width="100%" className={theme + " chatizo-msg-body"}>
        {/* {imsg.title && this.renderText(imsg.title)} */}
        {/* {imsg.image && this.renderImage(imsg.image)} */}
        {/* {imsg.video && this.renderVideo(imsg.video)} */}
        {imsg.text && this.renderText(imsg.text)}
        {/* {!ButtonOutSideBubble && showQuickRepliesAsButtons && imsg.quickReplies && this.renderButtons(imsg.quickReplies)} */}
        {!ButtonOutSideBubble && imsg.buttons && this.renderButtons(imsg.buttons)}
        {/* {!ButtonOutSideBubble && imsg.imgButtons && this.renderImgButtons(imsg.imgButtons)} */}
        {/* {!ButtonOutSideBubble && imsg.templates && this.renderTemplates(imsg.tempaltes)} */}
      </VStack>
    );
  }

}

export default WBBody;
