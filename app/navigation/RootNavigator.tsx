// react
import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// stack screens
import TabsScreen from './TabsScreen';

const RootNavigator = () => (
  <NavigationContainer>
    <TabsScreen />
  </NavigationContainer>
);

export default RootNavigator;
