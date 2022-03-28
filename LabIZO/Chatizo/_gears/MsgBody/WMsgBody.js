import React, { Component } from "react";
import { Accessor } from "../../../../STATIC";
import PropsType from "prop-types";
import { HStack, Spacer, VStack } from "../../../../LabIZO/Stackizo";

import _ from "lodash";
import styles from "../../_style/msg";
import { ScrollView } from "react-native-gesture-handler";
import WAvatar from "./WAvatar";
import WMsg from "./WMsg";

/**
 * @augments {Component<Props, State>}
 */
class WMsgBody extends Component {

  static propTypes = {

    onAvatarClicked: PropsType.func,

    onMounted: PropsType.func,
    user: PropsType.shape({
      ID: PropsType.string,
      name: PropsType.string,
      avatar: PropsType.oneOfType([PropsType.func, PropsType.string, PropsType.object, PropsType.node]),
    }),

    messages: PropsType.array,

    showInAvatar: PropsType.bool,
    showOutAvatar: PropsType.bool,
    hideSameAvatar: PropsType.bool,
    avatarAtTop: PropsType.bool,

    animated: PropsType.bool,
    typing: PropsType.bool,
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
    this.scrollToBottom();
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(WMsgBody.defaultProps))){
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
          scrollToBottom: this.scrollToBottom
        });
      }
      if(callback) callback();
    });
  }

  scrollToBottom(){
    if(this.scrollView){
      this.scrollView.scrollToEnd({animated: true});
    }
  }

  renderAvatar(user, hideImg){
    return (
      <WAvatar
        {...this.props}
        iuser={user}
        hideImg={hideImg}
        />
    );
  }

  renderMsgs(){
    let {messages, user,
      showInAvatar, showOutAvatar, avatarAtTop, hideSameAvatar, 
      typing, animated, _onQuickReply, disableButtonAfterSent} = this.props;

    let rtn = [];
    
    _.map(messages, (o, i) => {
      let last = i === messages.length - 1;
      let pos = o.user?.ID === user.ID? "out" : "in";
      let hideImg = false;
      let hideHeader = false;

      let prevMsg = messages[i-1];
      let nextMsg = messages[i+1];

      if(prevMsg?.user && o.user){
        hideHeader = prevMsg.user.ID === o.user.ID;
      }
      
      if(hideSameAvatar){
        if(avatarAtTop){       
          if(prevMsg?.user && o.user){
            hideImg = prevMsg.user.ID === o.user.ID;
          }
        }else{ 
          if(nextMsg?.user && o.user){
            hideImg = nextMsg.user.ID === o.user.ID;
          }
        }
      }
      
      rtn.push(
        <HStack alignItems={avatarAtTop? "flex-start": "flex-end"} key={i}>
          {(showInAvatar && pos === "in" && !o.msg.system) && 
            this.renderAvatar(o.user, hideImg)}
          {pos === "out" && !o.msg.system && <Spacer/>}
          <WMsg
            {...this.props}
            _onQuickReply={_onQuickReply}
            pos={pos}
            item={o}
            last={last}
            hideHeader={hideHeader}
            disabled={disableButtonAfterSent? !last : false}
            />
          {(showOutAvatar && pos === "out" && !o.msg.system) &&
            this.renderAvatar(o.user, hideImg)}
          {pos === "in" && !o.msg.system && <Spacer/>}
        </HStack>
      );
    });

    if(animated && typing){
      rtn.push(
        <HStack alignItems={avatarAtTop? "flex-start": "flex-end"} key="typing">
          {showInAvatar && this.renderAvatar(null, true)}
          <WMsg
            {...this.props}
            _onQuickReply={null}
            pos={"in"}
            item={{}}
            last={false}
            typingBubbles={true}
            hideHeader={true}
            />
          <Spacer/>
        </HStack>
      );
    }

    return rtn;
  }

  render(){
    return (
      <ScrollView width="100%" 
        ref={e => {this.scrollView = e}}
        style={styles.main} 
        fadingEdgeLength={50}>
        {this.renderMsgs()}
      </ScrollView>
    );
  }

}

export default WMsgBody;
