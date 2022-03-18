import _ from "lodash";

import STORE from "./AppStore";

class LocaleX {

  /**
   * 
   * @param {Object.<string, String>} obj 
   * @param {*} mapping 
   * @returns 
   */
  static Parse(obj, mapping = {}, lang = STORE.lang){
    let str = "";
    if(!obj) return "";
    if(_.isString(obj)){
      str = obj;
    }else{
      if(!obj[lang]){
        console.warn("No locale Key <" + lang + ">");
        return str;
      }
      str = obj[lang];
    }
    
    _.map(mapping, (o, i) => {
      str = str.replace("@" + i, o);
    });

    return str;
  }

}

export default LocaleX;