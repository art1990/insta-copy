// react
import React from 'react';
import { StyleSheet, View } from 'react-native';
// components
import ViewAndAddAvatar from 'components/ViewAndAddAvatar/index';

const Profile: React.FC = () => {
  return (
    <View>
      <ViewAndAddAvatar />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
