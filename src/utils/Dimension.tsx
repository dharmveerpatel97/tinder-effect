import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
  import {Dimensions} from 'react-native';
  
  export const SCREEN_WIDTH = Dimensions.get('window').width;
  export const SCREEN_HEIGHT = Dimensions.get('window').height;
  
  export const SW = (dimension:number) => {
    return wp((dimension / 375) * 100 + '%');
  };
  
  export const SH = (dimension:number) => {
    return hp((dimension / 812) * 100 + '%');
  };
  
  export const SF = (dimension:number) => {
    return hp((dimension / 812) * 100 + '%');
  };
  
  export const heightPercent = (percent:any) => {
    return hp(percent);
  };
  
  export const widthPercent = (percent:any) => {
    return wp(percent);
  };
  
  export const fontPercent = (percent:any) => {
    return hp(percent);
  };
  