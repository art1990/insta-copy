// react
import {StyleSheet} from 'react-native';
// utils
// @ts-ignore
import {vw} from 'react-native-expo-viewport-units';

export default StyleSheet.create({
  fullScreen: {
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: vw(-50),
    marginRight: vw(-50),
    width: vw(100),
  },
});
