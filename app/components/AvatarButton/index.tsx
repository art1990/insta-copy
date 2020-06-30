// react
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Alert,
  Text,
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
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.wrapper, style]}>
        <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={[withBorder && styles.linearContainer]}>
          <View style={styles.container}>
            <Avatar {...rest} />
          </View>
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
  },
  linearContainer: {
    alignSelf: 'center',
    borderRadius: 200,
    padding: 2,
    overflow: 'hidden',
  },
  container: {
    padding: 2,
    borderRadius: 200,
    backgroundColor: Colors.WHITE,
    alignSelf: 'flex-start',
  },
});
