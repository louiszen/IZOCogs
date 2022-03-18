import React, { Component } from "react";
import { Text, View, ViewPropTypes } from 'react-native';

import PropsType from "prop-types";
import _ from "lodash";

import { Accessor } from "../../STATIC";

/**
 * Stack children components horizontally
 * @augments {Component<Props, State>}
 */
class HStack extends Component {

  static propTypes = {
    flexWrap: PropsType.string,
    justifyContent: PropsType.string,
    alignContent: PropsType.string,
    alignItems: PropsType.string,
    width: PropsType.oneOfType([PropsType.string, PropsType.number]),
    spacing: PropsType.oneOfType([PropsType.string, PropsType.number]),
    style: ViewPropTypes.style
  }

  static defaultProps = {
    flexWrap: "nowrap",
    justifyContent: "center",
    alignContent: undefined,
    alignItems: "center",
    width: "100%",
    spacing: 0,
    style: {}
  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this.setState((state, props) => ({
      ...props,
    }));
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(HStack.defaultProps))){
      this.componentDidMount();
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
        return;
    };
  }

  renderChildren(children){
    let {spacing} = this.props;
    if(React.isValidElement(children)){
      return children;
    }
    return _.map(children, (o, i) => {
      if(!o){
        return null;
      }else if(_.isArray(o)){
        return _.map(o, (v, x) => {
          return this.renderChildren(v);
        });
      }else if(_.isString(o)){
        return <Text key={i}>{o}</Text>;
      }else if(!React.isValidElement(o)){
        console.log(o);
        //return o;
      }else if(i === children.length - 1 || !o.props || !spacing){
        return React.cloneElement(o, {...o.props, key: i});
      }else{
        return React.cloneElement(o, 
          {
            ...o.props, 
            key: i, 
            style: {
              marginRight: o.props.margin || o.props.marginRight || (o.props.style && o.props.style.marginRight) || spacing,
              ...o.props.style,
            }
          });
      }
    });
  }

  render(){
    // eslint-disable-next-line no-unused-vars
    let {children, spacing, style, ...other} = this.props;
    return (
      <View 
        style={{
          display: "flex",
          flexDirection: "row",
          ...other,
          ...style
        }}
        >
        {this.renderChildren(children)}
      </View>
    );
  }

}

export default HStack;
