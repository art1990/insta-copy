// react
import React from 'react';
import { ActivityIndicator } from 'react-native';
// assets
import { Colors } from 'assets/styles/constants';

const Spinner = () => {
  return <ActivityIndicator size="large" color={Colors.SPINNER} />;
};

export default Spinner;
