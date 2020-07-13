// react
import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
// components
import Avatar from 'components/Avatar';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
// colors
import { Colors } from 'assets/styles/constants';
import { GestureResponderEvent } from 'react-native';
// types
import { IAvatarProps } from 'components/Avatar';

interface IViewAndAddAvatarProps {
  onPress: (e: GestureResponderEvent) => void;
  source?: IAvatarProps['source'];
}

const ViewAndAddAvatar: React.FC<IViewAndAddAvatarProps> = ({
  onPress,
  source,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container]}>
        <Avatar size="lg" source={source} />
        <View style={[styles.iconContainer]}>
          <AntDesignIcons name="pluscircle" size={20} style={styles.icon} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ViewAndAddAvatar;

const styles = StyleSheet.create({
  container: { position: 'relative', alignSelf: 'flex-start' },
  iconContainer: {
    bottom: -2,
    right: 0,
    position: 'absolute',
    borderColor: Colors.WHITE,
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: Colors.WHITE,
  },
  icon: {
    color: Colors.BLUE,
  },
});
