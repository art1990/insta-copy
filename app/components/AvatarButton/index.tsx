// react
import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Alert,
  Text,
  Animated,
} from 'react-native';
// components
import Avatar, {IAvatarProps} from 'components/Avatar';
// linear-gradient
import LinearGradient from 'react-native-linear-gradient';
// colors
import {Colors} from 'assets/styles/constants';

interface IAvatarButtonProps extends IAvatarProps {
  onPress?: (event: GestureResponderEvent) => void;
  withBorder?: boolean;
  username?: string;
  style?: any;
}

const AvatarButton: React.FC<IAvatarButtonProps> = ({
  onPress = () => Alert.alert('Press'),
  withBorder = true,
  username,
  style,
  ...rest
}) => {
  const animated = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(false);

  const startAnim = () => {
    setIsLoading(true);
    Animated.loop(
      Animated.timing(animated, {
        toValue: 90,
        duration: 4000,
        useNativeDriver: false,
      }),
    ).start();
  };

  useEffect(() => {
    let time: number | null = null;
    time = isLoading
      ? setTimeout(() => {
          setIsLoading(false);
        }, 1000)
      : null;
    return () => {
      time && clearTimeout(time);
    };
  }, [isLoading]);

  return (
    <TouchableWithoutFeedback onPress={onPress} onPressIn={startAnim}>
      <View style={[styles.wrapper, style]}>
        <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={[withBorder && styles.linearContainer]}>
          <View style={styles.container}>
            <Avatar {...rest} />
          </View>
          <Animated.View
            style={[
              styles.loader,
              isLoading && styles.visible,
              {transform: [{rotate: animated}]},
            ]}
          />
        </LinearGradient>
        {username && <Text>{username}</Text>}
      </View>
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
  visible: {opacity: 1},
  container: {
    position: 'relative',
    padding: 2,
    borderRadius: 200,
    backgroundColor: Colors.WHITE,
    alignSelf: 'flex-start',
    zIndex: 3,
  },
});
