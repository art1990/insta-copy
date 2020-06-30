// react
import React from 'react';
import {Alert} from 'react-native';
// react-navigator
import {createStackNavigator} from '@react-navigation/stack';
// components
import IconButton from 'components/IconButton';
// screens
import Home from 'screens/Home';
// routes
import {Routes} from './routes';

// assets
import Logo from '../assets/img/logo.svg';

const HomeStack = createStackNavigator();

const HomeStackScreen: React.FC = () => (
  <HomeStack.Navigator initialRouteName={Routes.HOME}>
    <HomeStack.Screen
      name={Routes.HOME}
      component={Home}
      options={() => ({
        headerLeft: () => (
          <IconButton
            onPress={() => {
              Alert.alert('press');
            }}
            name="camera"
          />
        ),
        headerLeftContainerStyle: {paddingLeft: 10},
        headerRightContainerStyle: {paddingRight: 10},
        headerTitle: () => <Logo width={80} />,
        headerRight: () => (
          <IconButton
            onPress={() => {
              Alert.alert('press');
            }}
            name="send"
          />
        ),
      })}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
