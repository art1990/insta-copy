// react
import React from 'react';
import {TouchableHighlight, GestureResponderEvent} from 'react-native';
// icon
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

interface IIconProps {
  onPress?: (event: GestureResponderEvent) => void;
  name: 'camera' | 'send';
  size?: number;
}

const IconButton: React.FC<IIconProps> = ({onPress, name, size = 25}) => (
  <TouchableHighlight onPress={onPress}>
    <SimpleLineIcons name={name} size={size} />
  </TouchableHighlight>
);

export default IconButton;
