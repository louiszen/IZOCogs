import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

/**
 * https://oblador.github.io/react-native-vector-icons/
 */

class IconX {

  /**
   * @typedef { "ant" | "entypo" | "evil" | "feather" 
   *  | "awesome" | "awesome5" | "fontisto"
   *  | "foundation" | "ionic" | "mui" | "muicom" 
   *  | "oct" | "zocial" | "simple" } bundle
   * 
   * @param {bundle} bundle 
   * @param {String} name 
   * @param {Number} size 
   * @param {*} color 
   */
  static Get(bundle, name, size, color){
    switch(bundle){
      case "ant": return <AntDesign size={size} name={name} color={color}/>;
      case "entypo": return <Entypo size={size} name={name} color={color}/>;
      case "evil": return <EvilIcons size={size} name={name} color={color}/>;
      case "feather": return <Feather size={size} name={name} color={color}/>;
      case "awesome": return <FontAwesome size={size} name={name} color={color}/>;
      case "awesome5": return <FontAwesome5 size={size} name={name} color={color}/>;
      case "fontisto": return <Fontisto size={size} name={name} color={color}/>;
      case "foundation": return <Foundation size={size} name={name} color={color}/>;
      case "ionic": return <Ionicons size={size} name={name} color={color}/>;
      case "mui": return <MaterialIcons size={size} name={name} color={color}/>;
      case "muicom": return <MaterialCommunityIcons size={size} name={name} color={color}/>;
      case "oct": return <Octicons size={size} name={name} color={color}/>;
      case "zocial": return <Zocial size={size} name={name} color={color}/>;
      case "simple": return <SimpleLineIcons size={size} name={name} color={color}/>;
    }
  }

  /**
   * 
   * @param {Function} onPress 
   * @param {bundle} bundle 
   * @param {String} name 
   * @param {Number} size 
   * @param {String} color 
   * @param {*} iconStyle 
   * @param {String} backgroundColor 
   * @param {Number} borderRadius 
   */
  static Button(onPress, bundle, name, size, color, iconStyle, backgroundColor, borderRadius){
    switch(bundle){
      case "ant": return <AntDesign.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "entypo": return <Entypo.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "evil": return <EvilIcons.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "feather": return <Feather.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "awesome": return <FontAwesome.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "awesome5": return <FontAwesome5.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "fontisto": return <Fontisto.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "foundation": return <Foundation.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "ionic": return <Ionicons.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "mui": return <MaterialIcons.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "muicom": return <MaterialCommunityIcons.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "oct": return <Octicons.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "zocial": return <Zocial.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
      case "simple": return <SimpleLineIcons.Button onPress={onPress} size={size} name={name} color={color} iconStyle={iconStyle} backgroundColor={backgroundColor} borderRadius={borderRadius}/>;
    }
  }

}

export default IconX;