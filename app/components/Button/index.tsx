// react
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
// colors
import { Colors } from 'assets/styles/constants';

interface IButtonprops {
  onPress: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  color?: 'blue';
}

const Button: React.FC<IButtonprops> = ({
  children,
  onPress,
  style,
  color,
}) => {
  const isColorBlue = color === 'blue';

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={[styles.container, style, isColorBlue && styles.bgColorBlue]}>
        <Text style={[styles.text, isColorBlue && styles.textWhite]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.1,
    borderColor: Colors.TEXT_GREY,
    borderRadius: 4,
    paddingVertical: 2,
  },
  bgColorBlue: { backgroundColor: Colors.BLUE },
  textWhite: { color: Colors.WHITE },
  text: { fontWeight: '700', alignSelf: 'center' },
});
