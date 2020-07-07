// react
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
// image
const defaultAvatar = require('assets/img/defaultAvatar.jpeg');
// colors
import {Colors} from 'assets/styles/constants';

export interface IAvatarProps {
  source?: any;
  size?: 'md' | 'sm' | 'esm' | 'lg';
  isFocused?: boolean;
}

const Avatar: React.FC<IAvatarProps> = ({
  source = defaultAvatar,
  size = 'md',
  isFocused,
}) => {
  const sizeCount =
    size === 'sm' ? 30 : size === 'esm' ? 20 : size === 'lg' ? 100 : 50;
  const sizeStyle = {
    height: sizeCount,
    width: sizeCount,
    borderRadius: sizeCount / 2,
  };

  return (
    <View style={[isFocused && styles.borderWrapper]}>
      <Image
        source={typeof source === 'string' ? {uri: source} : source}
        style={[styles.container, sizeStyle]}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  borderWrapper: {
    borderColor: Colors.TAB,
    borderWidth: 1,
    borderRadius: 200,
    padding: 2,
  },
  container: {
    overflow: 'hidden',
  },
});
