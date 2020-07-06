// react
import React from 'react';
import {
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Alert,
} from 'react-native';
// icon
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FontistoIcons from 'react-native-vector-icons/Fontisto';

export interface IIconProps {
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  name:
    | 'camera'
    | 'send'
    | 'dots-vertical'
    | 'comment'
    | 'bookmark'
    | 'bookmark-alt'
    | 'hearto'
    | 'heart';
  size?: number;
  style?: any;
  color?: string;
}

const IconButton: React.FC<IIconProps> = ({
  onPress = () => Alert.alert('Press icon button'),
  onPressIn,
  onPressOut,
  name,
  size = 25,
  style,
  color,
}) => {
  const Icon =
    name === 'send'
      ? FeatherIcons
      : name === 'dots-vertical'
      ? MaterialCommunityIcons
      : name === 'comment' || name === 'bookmark' || name === 'bookmark-alt'
      ? FontistoIcons
      : name === 'hearto' || name === 'heart'
      ? AntDesignIcons
      : SimpleLineIcons;

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Icon name={name} size={size} style={style} color={color} />
    </TouchableWithoutFeedback>
  );
};

export default IconButton;
