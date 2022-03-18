import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Accessor, STORE } from "../STATIC";
import { when } from "mobx";
import { observer } from "mobx-react";
import PropsType from "prop-types";
import _ from "lodash";
import ZSnackBar from "./_gears/ZSnackBar";
import HStack from "../LabIZO/Stackizo/HStack";
import SnackAlert from "./_gears/SnackAlert";

//import SnackAlert from "./_gears/SnackAlert";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

/**
 * @augments {Component<Props, State>}
 */
class Overlay extends Component {

  static propTypes = {
    
  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      snackOpen: false,
      loadingOpen: false,
      dialogOpen: false,
      backdropOpen: false,
      buttonWidth: "100%"
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){

    let {snackOpen, loadingOpen, dialogOpen, backdropOpen} = this.state;
  
    when(() => snackOpen !== !_.isEmpty(STORE.alert), 
      () => {
        this.setState({
          snackOpen: !_.isEmpty(STORE.alert)
        });
      }
    );

    when(() => loadingOpen !== STORE.loading,
      () => {
        this.setState({
          loadingOpen: STORE.loading
        });
      }
    );

    when(() => dialogOpen !== !_.isEmpty(STORE.ask),
      () => {
        this.setState({
          dialogOpen: !_.isEmpty(STORE.ask)
        });
      }
    );

    when(() => backdropOpen !== !_.isEmpty(STORE.backdrop),
      () => {
        this.setState({
          backdropOpen: !_.isEmpty(STORE.backdrop)
        });
      }
    );

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

  closeSnack = () => {
    this.setState({
      snackOpen: false
    }, () => {
      STORE.clearAlert();
    });
  }

  SnackDuration = () => {
    if(!STORE.alert || !STORE.alert.severity) return 3000;
    switch(STORE.alert.severity){
      default: case "success": return 3000;
      case "warn": case "warning": return 6000;
      case "info": return 4000;
      case "error": return 6000;
    }
  }

  render(){
    let {snackOpen} = this.state;
    let {children} = this.props;
    return (
      <View style={styles.container}>
        {children}
        <ZSnackBar show={snackOpen} onClose={this.closeSnack} autoHideDuration={this.SnackDuration()}>
          <SnackAlert 
            message={STORE.alert && STORE.alert.message}
            severity={STORE.alert && STORE.alert.severity} 
            onClose={this.closeSnack}/>
        </ZSnackBar>
      </View>
    );
  }

}

export default observer(Overlay);
