// react
import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Text,
  StyleProp,
  ViewStyle,
  Animated,
} from 'react-native';
// components
import Avatar, { IAvatarProps } from 'components/Avatar';
// linear-gradient
import LinearGradient from 'react-native-linear-gradient';
// colors
import { Colors } from 'assets/styles/constants';

interface IAvatarButtonProps extends IAvatarProps {
  onPress?: (event: GestureResponderEvent) => void;
  withBorder?: boolean;
  username?: string;
  style?: StyleProp<ViewStyle>;
}

const AvatarButton: React.FC<IAvatarButtonProps> = ({
  onPress = () => {},
  withBorder = true,
  username,
  style,
  ...rest
}) => {
  const animatedDashed = useRef(new Animated.Value(0)).current;
  const animatedScale = useRef(new Animated.Value(1)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const [isLoading, setIsLoading] = useState(false);

  const onPressIn = () => {
    setIsLoading(true);
    Animated.sequence([
      Animated.timing(animatedScale, {
        toValue: 0.8,
        useNativeDriver: false,
        duration: 100,
      }),
    ]).start();
  };

  const onPressOut = () => {
    Animated.timing(animatedScale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    let time: number | null = null;
    if (isLoading) {
      time = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      Animated.sequence([
        Animated.timing(animatedOpacity, {
          toValue: 1,
          useNativeDriver: false,
          duration: 0,
        }),
        Animated.loop(
          Animated.timing(animatedDashed, {
            toValue: 90,
            duration: 4000,
            useNativeDriver: false,
          }),
        ),
      ]).start();
    }
    return () => {
      time && clearTimeout(time);
    };
  }, [isLoading, animatedOpacity, animatedDashed]);

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View
        style={[
          styles.wrapper,
          style,
          { transform: [{ scale: animatedScale }] },
        ]}>
        <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={[withBorder && styles.linearContainer]}>
          <View style={styles.container}>
            <Avatar {...rest} />
          </View>
          <Animated.View
            style={[
              styles.loader,
              isLoading && styles.visible,
              { transform: [{ rotate: animatedDashed }] },
              {
                opacity: animatedOpacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, isLoading ? 1 : 0],
                }),
              },
            ]}
          />
        </LinearGradient>
        {username && <Text>{username}</Text>}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AvatarButton;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  linearContainer: {
    alignSelf: 'center',
    borderRadius: 200,
    padding: 2,
    overflow: 'hidden',
    position: 'relative',
    zIndex: 3,
  },
  loader: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    borderRadius: 200,
    borderStyle: 'dashed',
    borderColor: 'white',
    borderWidth: 2,
  },
  visible: { opacity: 1 },
  container: {
    position: 'relative',
    padding: 2,
    borderRadius: 200,
    backgroundColor: Colors.WHITE,
    alignSelf: 'flex-start',
    zIndex: 3,
  },
});
