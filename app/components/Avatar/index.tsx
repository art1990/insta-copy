// react
import React from 'react';
import {StyleSheet, Image} from 'react-native';
// image
const defaultAvatar = require('assets/img/defaultAvatar.jpeg');

export interface IAvatarProps {
  source?: any;
  size?: 'md' | 'sm' | 'esm' | 'lg';
}

const Avatar: React.FC<IAvatarProps> = ({
  source = defaultAvatar,
  size = 'md',
}) => {
  const sizeCount =
    size === 'sm' ? 30 : size === 'esm' ? 25 : size === 'lg' ? 100 : 50;
  const sizeStyle = {
    height: sizeCount,
    width: sizeCount,
    borderRadius: sizeCount / 2,
  };

  return (
    <Image
      source={typeof source === 'string' ? {uri: source} : source}
      style={[styles.container, sizeStyle]}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});
