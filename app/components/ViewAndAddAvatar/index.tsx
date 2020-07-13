// react
import React from 'react';
import { StyleSheet, View } from 'react-native';
// components
import Avatar from 'components/Avatar';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
// hooks
import useLayout from 'hooks/useLayout';

const ViewAndAddAvatar = () => {
  return (
    <View style={styles.container}>
      <Avatar size="lg" />
      <AntDesignIcons
        name="pluscircle"
        size={22}
        color="red"
        style={styles.icon}
      />
    </View>
  );
};

export default ViewAndAddAvatar;

const styles = StyleSheet.create({
  container: { position: 'relative' },
  icon: { position: 'absolute', borderColor: 'blue', borderWidth: 2 },
});
