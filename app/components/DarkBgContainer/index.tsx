// react
import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
// colors
import {Colors} from 'assets/styles/constants';

const DarkBgContainer: React.FC<{style: StyleProp<ViewStyle>}> = ({
  children,
  style,
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default DarkBgContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.MEDIA_META_BG,
    zIndex: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
});
