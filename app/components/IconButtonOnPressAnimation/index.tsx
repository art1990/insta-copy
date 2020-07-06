// react
import React, {useState, useRef} from 'react';
import {StyleSheet, GestureResponderEvent, Animated} from 'react-native';
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
  const scaleAnimation = useRef(new Animated.Value(1)).current;

  const onPressIn = () =>
    Animated.timing(scaleAnimation, {
      toValue: 1.2,
      duration: 100,
      useNativeDriver: true,
    }).start();

  const onPressOut = () =>
    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();

  return (
    <Animated.View style={{transform: [{scale: scaleAnimation}]}}>
      <IconButton
        {...rest}
        name={name}
        onPress={handleOnPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        color={color}
      />
    </Animated.View>
  );
};

export default IconButtonOnPressAnimation;
