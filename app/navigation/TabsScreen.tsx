// react
import React from 'react';
import {StyleSheet} from 'react-native';
// components
import Avatar from 'components/Avatar';
// screens
import HomeStackScreen from './HomeStackScreen';
import Search from 'screens/Search';
import Activity from 'screens/Activity';
import AddPhoto from 'screens/AddPhoto';
import Profile from 'screens/Profile';
// navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// colors
import {Routes} from './routes';
// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import OcticonsIcons from 'react-native-vector-icons/Octicons';

const SearchStack = createStackNavigator();
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name={Routes.SEARCH} component={Search} />
  </SearchStack.Navigator>
);

const AddPhotoStack = createStackNavigator();
const AddPhotoStackScreen = () => (
  <AddPhotoStack.Navigator>
    <AddPhotoStack.Screen name={Routes.ADD_PHOTO} component={AddPhoto} />
  </AddPhotoStack.Navigator>
);

const ActivityStack = createStackNavigator();
const ActivityStackScreen = () => (
  <ActivityStack.Navigator>
    <ActivityStack.Screen name={Routes.ACTIVITY} component={Activity} />
  </ActivityStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name={Routes.PROFILE} component={Profile} />
  </ProfileStack.Navigator>
);

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator
    tabBarOptions={{
      showLabel: false,
      style: styles.taBarContainer,
    }}
    screenOptions={({route}) => ({
      gestureEnabled: true,

      tabBarIcon: ({focused}) => {
        const size = 30;

        switch (route.name) {
          case Routes.HOME_TAB:
            return (
              <MaterialCommunityIcons
                name={`home-variant${focused ? '' : '-outline'}`}
                size={size}
              />
            );
          case Routes.SEARCH_TAB:
            return <AntDesignIcons size={size} name="search1" />;
          case Routes.ADD_PHOTO_TAB:
            return <OcticonsIcons size={size} name="diff-added" />;
          case Routes.ACTIVITY_TAB:
            return (
              <AntDesignIcons
                size={size - 4}
                name={`heart${focused ? '' : 'o'}`}
              />
            );
          case Routes.PROFILE_TAB:
            return <Avatar size="esm" isFocused={focused} />;
        }
      },
    })}>
    <Tabs.Screen name={Routes.HOME_TAB} component={HomeStackScreen} />
    <Tabs.Screen name={Routes.SEARCH_TAB} component={SearchStackScreen} />
    <Tabs.Screen name={Routes.ADD_PHOTO_TAB} component={AddPhotoStackScreen} />
    <Tabs.Screen name={Routes.ACTIVITY_TAB} component={ActivityStackScreen} />
    <Tabs.Screen name={Routes.PROFILE_TAB} component={ProfileStackScreen} />
  </Tabs.Navigator>
);

export default TabsScreen;

const styles = StyleSheet.create({
  taBarContainer: {
    height: 50,
  },
});
