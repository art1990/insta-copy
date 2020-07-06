// react
import React, {useState} from 'react';
import {StyleSheet, GestureResponderEvent} from 'react-native';
// components
import IconButton, {IIconProps} from 'components/IconButton';

interface IIconWithAnimationProps extends Omit<IIconProps, 'name'> {
  nameArr: IIconProps['name'][];
}

const IconButtonOnPressAnimation: React.FC<IIconWithAnimationProps> = ({
  onPress,
  nameArr,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleOnPress = (event: GestureResponderEvent): void => {
    setIsPressed((prev) => !prev);
    onPress && onPress(event);
  };
  const name = nameArr[(isPressed && 1) || 0];
  const color = name === 'heart' && isPressed ? 'red' : undefined;

  return (
    <IconButton {...rest} name={name} onPress={handleOnPress} color={color} />
  );
};

export default IconButtonOnPressAnimation;

const styles = StyleSheet.create({});
