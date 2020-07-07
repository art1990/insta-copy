// react
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// react-navigator
import { createStackNavigator } from '@react-navigation/stack';
// components
import IconButton from 'components/IconButton';
// screens
import Profile from 'screens/Profile';
// routes
import { Routes } from './routes';
// icons
import FeatherIcons from 'react-native-vector-icons/Feather';
// colors
import { Colors } from 'assets/styles/constants';

const ProfileStack = createStackNavigator();

const size = 16;

const headerLeft = () => (
  <View style={styles.headerLeft}>
    <Text style={styles.headerText}>test_art190000</Text>
    <FeatherIcons name="chevron-down" size={size} />
  </View>
);

const headerRight = () => (
  <View style={styles.headerRight}>
    {[...new Array(3)].map(() => (
      <View style={styles.row} />
    ))}
  </View>
);

const HomeStackScreen: React.FC = () => (
  <ProfileStack.Navigator
    initialRouteName={Routes.HOME}
    screenOptions={{
      headerStyle: { elevation: 0, height: 50 },
      headerTitle: '',
    }}>
    <ProfileStack.Screen
      name={Routes.PROFILE}
      component={Profile}
      options={() => ({
        headerLeft,
        headerLeftContainerStyle: { paddingLeft: 10 },
        headerRightContainerStyle: { paddingRight: 10 },
        headerRight,
      })}
    />
  </ProfileStack.Navigator>
);

export default HomeStackScreen;

const styles = StyleSheet.create({
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  headerText: { fontWeight: 'bold', fontSize: size },
  headerRight: { backgroundColor: 'red', height: 40, width: 40 },
  row: { width: 20, height: 2, backgroundColor: Colors.TAB, marginBottom: 6 },
});
