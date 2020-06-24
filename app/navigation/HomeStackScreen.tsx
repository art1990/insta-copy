// react
import React from 'react';
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
      options={({navigation, route}) => ({
        headerLeft: () => <IconButton onPress={() => {}} name="camera" />,
        headerTitle: (props) => <Logo width={80} />,
      })}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
