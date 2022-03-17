import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
import { makeAutoObservable, runInAction, toJS, autorun, set } from "mobx";
import Accessor from "./Accessor";

class AppStore {

  lang = "EN";
  user = {};
  server = {};
  alert = {};
  loading = false;
  initialized = false;
  ask = {};
  mini = true;
  config = {};
  save = {};
  backdrop = null;

  constructor(){
    makeAutoObservable(this);
    
    let firstRun = true;
    autorun(async () => {
      console.log("autorun") //AUTORUN NOT WORKING
      // on load check if there"s an existing STORE on 
      // localStorage and extend the STORE
      if (firstRun) {
        let existingStore = await AsyncStorage.getItem("STORE");
        if (existingStore) {
          runInAction( () => {
            set(this, JSON.parse(existingStore));
          });
        }
      }
  
      // from then on serialize and save to localStorage
      let serializedThis = toJS(this);
      await AsyncStorage.setItem(
        "STORE", 
        JSON.stringify(serializedThis)
      );
    });
  
    firstRun = false;
    
  }

  UPDATE(field, value){
    runInAction(async () => {
      Accessor.Set(this, field, value);
      let serializedThis = toJS(this);
      await AsyncStorage.setItem(
        "STORE", 
        JSON.stringify(serializedThis)
      );
    });
  }

  RESET(){
    runInAction(() => {
      this.lang = "EN";
      this.user = {};
      this.server = {};
      this.alert = {};
      this.loading = false;
      this.initialized = false;
      this.ask = {};
      this.mini = true;
      this.config = {};
      this.save = {};
      this.backdrop = null;
    });
  }

  setUser(user){
    this.UPDATE("user", user);
  }

  clearUser(){
    this.UPDATE("user", {});
  }

  setConfig(config){
    this.UPDATE("config", config);
  }

  clearConfig(){
    this.UPDATE("config", {});
  }

  setLang(lang){
    this.UPDATE("lang", lang);
  }

  setServer(server){
    this.UPDATE("server", server);
  }

  onlyUsernamePassword(){
    return  (!_.isArray(this.server.Authentication) && this.server.Authentication === "Username-Password") 
      || (_.isArray(this.server.Authentication) 
        && this.server.Authentication.length === 1 
        && this.server.Authentication[0] === "Username-Password");
  }

  Alert(message, severity = "info"){
    this.UPDATE("alert", 
    {
      message,
      severity
    });
  }

  Ask(title, message = "", onConfirm = null, onCancel = null, autoClose = true){
    this.UPDATE("ask", 
    {
      title, 
      message, 
      onConfirm,
      onCancel,
      buttons: ["OK", "Cancel"],
      showCloseIcon: false,
      loading: false,
      autoClose: autoClose
    });
  }

  SetAskLoading(f){
    this.UPDATE("ask.loading", f);
  }

  Form(title, message = "", inner = null, onConfirm = null, onCancel = null){
    this.UPDATE("ask", 
    {
      title, 
      message, 
      onConfirm,
      onCancel,
      inner,
      buttons: [],
      showCloseIcon: true
    });
  }

  Pop(title, message = "", onConfirm = null){
    this.UPDATE("ask", 
    {
      title, 
      message, 
      onConfirm,
      buttons: ["OK"]
    });
  }

  Backdrop(backdrop, addOns){
    this.UPDATE("backdrop", 
    {
      render: backdrop, 
      addOns: addOns
    });
  }

  clearBackdrop(){
    this.UPDATE("backdrop", null);
  }

  clearAlert(){
    this.UPDATE("alert", {});
  }

  clearAsk(){
    this.UPDATE("ask", {});
  }

  clearPop(){
    this.clearAsk();
  }

  isLoggedIn(){
    return !_.isEmpty(this.user);
  }

  isLoading(f){
    this.UPDATE("loading", f);
  }

  setInitialized(f){
    this.UPDATE("initialized", f);
  }

  isInitialized(){
    return this.initialized;
  }

  toggleMini(){
    this.UPDATE("mini", !this.mini);
  }

  clearSave(){
    this.UPDATE("save", {});
  }

  setSave(save){
    this.UPDATE("save", save);
  }

  Save(save){
    let newSave = {
      ...this.save,
      ...save
    };
    this.UPDATE("save", newSave);
  }

}

const STORE = new AppStore();
export default STORE;